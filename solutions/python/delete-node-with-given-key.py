def delete_node(head, key):
  prev = None
  current = head
  
  while (current != None):
    if current.data == key:
      if current == head:
        head = head.next
        current = head
      else:  
        prev.next = current.next
        current = current.next
    else:
      prev = current
      current = current.next

  # key not found in list
  if current == None:
    return head
  return head

list_head = create_random_list(10)
print("Original:")
display(list_head)

lst = to_list(list_head)

print("\nDeleting " + str(lst[5]), end="")
list_head = delete_node(list_head, lst[5])
print("\nAfter Delete LinkedListNode:")
display(list_head)

print("\nDeleting (Non-Existing) " + str(101), end="")
list_head = delete_node(list_head, 101)
print("\nAfter Delete LinkedListNode:")
display(list_head)

print("\nDeleting 1st node:" + str(lst[0]), end="")
list_head = delete_node(list_head, lst[0])
print("\nAfter Delete 1st LinkedListNode:")
display(list_head)

lst = to_list(list_head)
print("\nDeleting last node:" + str(lst[-1]), end="")
list_head = delete_node(list_head, lst[-1])
print("\nAfter Delete last LinkedListNode:")
display(list_head)
