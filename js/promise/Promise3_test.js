const Promise = require('./Promise3.js');

function wait(millis) {
  millis = Math.max(0, millis);

  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      resolve();
    }, millis);
  });
}


function log(msg) {
  console.log('LOG::::', msg);
}

wait(1000).then(function() {
  return Promise.reject('Error: abc');
}).catch(function(reason) {
  console.log(reason);
}).finally(function () {
  console.log('done');
});
