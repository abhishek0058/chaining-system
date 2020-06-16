function createUniqueId (name = "") {
  if (!name || name.length < 3) throw new Error("Name cannot shorter than 3 characters");

  const firstThreeChars = name.substr(0, 3).toLowerCase();
  const randomInt = Math.random() * (999 - 100) + 100;

  return firstThreeChars+randomInt;
}

function createParentId (parentNode) {
  const { uniqueId, parentId } = parentNode;
  
  if (!uniqueId || !parentId) throw new Error("Invalid node");
  
  return `${parentId}|${uniqueId}`;
}

export { createUniqueId, createParentId };