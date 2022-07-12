let mirror_tree = function(root) {
  if (!root) {
    return;
  }

  //  We will do a post-order traversal of the binary tree.
  if (root.left) {
    mirror_tree(root.left);
  }

  if (root.right) {
    mirror_tree(root.right);
  }

  //  Let's swap the left and right nodes at current level.
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
};

let level_order_traversal_ = function(root) {
  if (!root) {
    return;
  }
  let q = [];
  q.push(root);

  while (q.length > 0) {
    let temp = q.shift();
    console.log(temp.data + ",");
    if (temp.left) {
      q.push(temp.left);
    }
    if (temp.right) {
      q.push(temp.right);
    }
  }
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Mirror Tree");
console.log("---------------------------------------");
let root = create_random_BST(15);
console.log("level Order Traversal:");
level_order_traversal_(root);
mirror_tree(root);
console.log("Mirrored Level Order Traversal:");
level_order_traversal_(root);
console.log("++++++ Test Done Successfully ++++++");
