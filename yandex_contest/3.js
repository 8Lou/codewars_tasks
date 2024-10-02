const readline = require("readline").createInterface({
  input: process.stdin,
});

function getAllSelectors(line) {
  const root = JSON.parse(line);
  const selectorsSet = new Set();

  function traverse(node, path) {
    const currentPath = path ? `${path}>${node.tagName}` : node.tagName;
    selectorsSet.add(currentPath);

    if (node.children && Array.isArray(node.children)) {
      for (const child of node.children) {
        traverse(child, currentPath);
      }
    }
  }

  traverse(root, '');

  return Array.from(selectorsSet).sort().join(",");
}

readline.on("line", (line) => {
  const result = getAllSelectors(line);
  console.log(result);
  readline.close();
});