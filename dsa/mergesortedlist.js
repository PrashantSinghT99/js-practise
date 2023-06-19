var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(0);
    tail = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        }
        else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail=tail.next;
    }

    if (l1 !== null) {
        tail.next = l1;
    }
    else {
        tail.next = l2;
    }
    return dummy.next;
};