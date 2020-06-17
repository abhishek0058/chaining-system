"use strict"

import { createUniqueId, createParentId } from "./utils"

// we are imitating mongoDB here, else an object will be faster
let Tree = [
  { name: "Root", parentId: "", uniqueId: "roo123" }
];

/**
 * 
 * @param {Object} record 
 * @description: This function is used to create a new memeber in the tree
 */
function addNewNode (record) {
  const { name, parentId } = record;

  if (!name || name === "") throw new Error("Name cannot be null");

  const uniqueId = createUniqueId(name);
  const parentNode = getNodeByUniqueId(parentId);

  const parentIdForNewNode = createParentId(parentNode);

  const newNode  = { name, uniqueId, parentId: parentIdForNewNode };

  Tree.push(newNode);
} 

function getListOfParents () {
  return Tree.map(({ name, uniqueId }) => ({ name, uniqueId }));
}

export { addNewNode, getListOfParents };

/** Helper functions   */

function getNodeByUniqueId (id) {
  const node = Tree.find(node => node.uniqueId === id);

  if (!node) throw new Error("Node not found for uniqueId = ", uniqueId);

  return node;
}
