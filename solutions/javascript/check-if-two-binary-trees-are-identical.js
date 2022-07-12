let areIdentical = function(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }

  if (root1 && root2) {
    return (root1.data === root2.data &&
            areIdentical(root1.left, root2.left) &&
            areIdentical(root1.right, root2.right));
  }

  return false;
};

let root1 = new BinaryTreeNode(100);

insert(root1, 50);
insert(root1, 200);
insert(root1, 25);
insert(root1, 125);
insert(root1, 350);

displayLevelOrder(root1);
let root2 = createRandomBST(14);
displayLevelOrder(root2);

if (areIdentical(root1, root2)) {
  console.log("The trees are identical");
} else {
  console.log("The trees are not identical");
}
