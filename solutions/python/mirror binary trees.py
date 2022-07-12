def mirror_tree(root):
  if root == None:
    return

  # We will do a post-order traversal of the binary tree.
  if root.left != None:
    mirror_tree(root.left)

  if root.right != None:
    mirror_tree(root.right)

  # Let's swap the left and right nodes at current level.
  temp = root.left
  root.left = root.right
  root.right = temp
  

def level_order_traversal(root):
  if root == None:
    return
  q = deque()
  q.append(root)

  while q:
    temp = q.popleft()
    print(str(temp.data), end = ",")
    if temp.left != None:
      q.append(temp.left)
    if temp.right != None:
      q.append(temp.right)

arr = [100,25,75,15,350,300,10,50,200,400,325,375]
root = create_BST(arr)
#root = create_random_BST(15)
print("\nLevel Order Traversal:", end = "")
level_order_traversal(root)

mirror_tree(root)
print("\nMirrored Level Order Traversal:", end = "")
level_order_traversal(root)
