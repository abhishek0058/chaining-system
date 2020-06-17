function createUniqueId(name = "") {
  if (!name || name.length < 3) throw new Error("Name cannot shorter than 3 characters");

  const firstThreeChars = name.substr(0, 3).toLowerCase();
  const randomInt = Math.random() * (999 - 100) + 100;

  return firstThreeChars + randomInt;
}

function createParentId(parentNode) {
  const { uniqueId, parentId } = parentNode;
  
  if (!uniqueId) throw new Error("Invalid node");

  if (!parentId) return uniqueId;

  return `${parentId}|${uniqueId}`;
}

/**
 * 
 * @param {Object} record 
 * @description: This function is used to create a new memeber in the tree
 */
function getNewNode(record) {
  const { name, parentNode } = record;

  if (!name || name === "") throw new Error("Name cannot be null");

  const uniqueId = createUniqueId(name);
  const parentIdForNewNode = createParentId(parentNode);

  const newNode = { name, uniqueId, parentId: parentIdForNewNode };

  return newNode;
}

export { getNewNode };