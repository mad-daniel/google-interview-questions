def deep_copy_arbitrary_pointer(head):
  if head == None:
    return None

  current = head;
  new_head = None
  new_prev = None
  ht = dict()

  # create copy of the linked list, recording the corresponding
  # nodes in hashmap without updating arbitrary pointer
  while current != None:
    new_node = LinkedListNode(current.data)

    # copy the old arbitrary pointer in the new node
    new_node.arbitrary = current.arbitrary;

    if new_prev != None:
      new_prev.next = new_node
    else:
      new_head = new_node

    ht[current] = new_node

    new_prev = new_node
    current = current.next

  new_current = new_head

  # updating arbitrary pointer
  while new_current != None:
    if new_current.arbitrary != None:
      node = ht[new_current.arbitrary]
      new_current.arbitrary = node
    new_current = new_current.next
  return new_head

def create_linked_list_with_arb_pointers(length):
  head = create_random_list(length)
  v = []
  temp = head
  while temp != None:
    v.append(temp)
    temp = temp.next

  for i in range(0, len(v)):
    j = random.randint(0, len(v) - 1)
    p = random.randint(0, 100)
    if p < 75:
      v[i].arbitrary = v[j]
  return head

def print_with_arb_pointers(head):
  while head != None:
    print(str(head.data) + " (", end="")
    if head.arbitrary != None:
      print(head.arbitrary.data, end ="")
    print("), ", end="")
    head = head.next;

  print()

# Test Program.
def main():
  head = create_linked_list_with_arb_pointers(9)
  print_with_arb_pointers(head)

  head2 = deep_copy_arbitrary_pointer(head)
  print_with_arb_pointers(head2)

main()
