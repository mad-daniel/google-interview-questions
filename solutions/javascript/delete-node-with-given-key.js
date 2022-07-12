let delete_node = function(head, key) {
    let prev = null;
    let current = head;

    while (current) {
        if (current.data === key) {
            if (current === head) {
                head = head.next;
                current = head;
            } else {
                prev.next = current.next;
                current = current.next;
            }
        } else {
            prev = current;
            current = current.next;
        }
    }
    
    if (!current) {
        return head;
    }
    return head;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Delete Key from LinkList");
console.log("---------------------------------------");

let head_before_delete = create_linked_list([0, 1, 2, 3, 4, 5, 10, 9]);

let temp_head = head_before_delete;
console.log("before delete key");
while (temp_head) {
    console.log(temp_head.data);
    temp_head = temp_head.next;
}

head_before_delete = delete_node(head_before_delete, 5);
temp_head = head_before_delete;
console.log("after delete key number 5");
while (temp_head) {
    console.log(temp_head.data);
    temp_head = temp_head.next;
}
head_before_delete = delete_node(head_before_delete, 10);
temp_head = head_before_delete;
console.log("after delete key number 10");
while (temp_head) {
    console.log(temp_head.data);
    temp_head = temp_head.next;
}
head_before_delete = delete_node(head_before_delete, 0);
temp_head = head_before_delete;
console.log("after delete key number 0");
while (temp_head) {
    console.log(temp_head.data);
    temp_head = temp_head.next;
}
