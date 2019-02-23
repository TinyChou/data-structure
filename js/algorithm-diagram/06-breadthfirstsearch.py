from collections import deque

graph = {}
graph["you"] = [ "alice", "bob", "claire" ]
graph["bob"] = [ "anuj", "peggy" ]
graph["alice"] = [ "peggy" ]
graph["claire"] = [ "thom", "jonny" ]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

def search(name):
    search_queue = deque()
    search_queue += graph[name]
    searched = []
    result = []

    while search_queue:
        person = search_queue.popleft()
        if person not in searched:
            if person_is_seller(person) and person not in result:
                print person + " is a mango seller!"
                # return True
                result.append(person)
            else:
                search_queue += graph[person]
                searched.append(person)
    return result

def person_is_seller(person):
    return person == "peggy" or person == "jonny"

search("you")
