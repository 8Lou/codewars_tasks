const readline = require("readline").createInterface({
  input: process.stdin,
});

function minCostClimbingStairs(line) {
  const costs = line.split(",").map(Number);
  const n = costs.length;
  const dp = new Array(n + 2).fill(Infinity);
  
  dp[1] = 0;
  dp[2] = 0;

  for (let i = 1; i <= n; i++) {
    if (dp[i] === Infinity) continue;

    // Покупка билета типа 1: до станции i + 1
    if (i + 1 <= n + 1) {
      dp[i + 1] = Math.min(dp[i + 1], dp[i] + costs[i - 1]);
    }

    // Покупка билета типа 2: до станции i + 2
    if (i + 2 <= n + 1) {
      dp[i + 2] = Math.min(dp[i + 2], dp[i] + costs[i - 1]);
    }
  }

  return dp[n + 1].toString();
}

readline.on("line", (line) => {
  const result = minCostClimbingStairs(line);
  console.log(result);
  readline.close();
});