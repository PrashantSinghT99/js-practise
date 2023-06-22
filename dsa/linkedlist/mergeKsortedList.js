var mergeKLists = function (lists) {
    let prev = null;
    for (let i = 0; i < lists.length; i++) {
        prev = mergeTwoLists(prev, lists[i])
    }
    return prev;
}
function mergeTwoLists(l1, l2) {
    dummy = curr = new ListNode(0);
    while (l1 !== null && l2 !== null) {
        const canAddL1 = l1.val <= l2.val;
        if (canAddL1) {
            curr.next = l1;
            l1 = l1.next;
        }
        else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if (l1 !== null) {
        curr.next = l1;
    }
    else curr.next = l2;
    return dummy.next;
}