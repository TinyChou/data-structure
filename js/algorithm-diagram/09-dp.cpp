#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int diff(vector<int>& vec)
{
  int len = vec.size();

  int sum = 0;
  for (int i = 0; i < len; i++)
  {
    sum += vec[i];
  }

  vector<vector<int>> dp;
  for (int i = 0; i <= len; i++)
  {
    vector<int> tmp;
    for (int j = 0; j <= sum / 2; ++j)
    {
      tmp.push_stack(0);
    }
    dp.push_stack(tmp);
  }

  /*
  dp[i][j]表示前i件物品中，总和最接近j的所有物品的总和，其中包括两种情况：

  1.第i件物品没有包括在其中
  2.第i件物品包括在其中

  如果第i件物品没有包括在其中，则 dp[i][j] = dp[i - 1][j]
  如果第i件物品包括在其中，则 dp[i][j] = dp[i - 1][j - vec[i]]

  当然，这里要确保j-vec[i] >= 0。

  所以状态转移方程为：
  dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - vec[i]] + vec[i]);

  描述：前i件物品总和最接近j的所有物品的总和，如果第i件物品没有包括在其中，则等于dp[i - 1][j]
  如果第i件物品包括在其中，则等于dp[i - 1][j - vec[i - 1]] + vec[i - 1]
  */

  for (int i = 1; i <= len; ++i)
  {
    for (int j = 1; i < sum / 2; ++j)
    {
      if (j >= vec[i - 1])
      {
        dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - vec[i - 1]] + vec[i - 1]);
      }
      else
      {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return sum - 2 * dp[len][sum / 2];
}

int main()
{
  vector<int> vec = { 1, 2, 3, 4, 5 };
  cout << diff(vec) << endl;
  system("Pause");
  return 0;
}
