var reorderList = function (head) {
    slow = new ListNode();
    fast = new ListNode();
    slow = head
    fast = head.next
    while (fast !== null || fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    prev = reverseTheSecondHalf(slow.next)

    slow = head;
    fast = prev;

    while (fast !== null) {
        tmp1 = slow.next;
        tmp2 = fast.next;

        slow.next = fast;
        fast.next = tmp1;
        slow = tmp1;
        fast = tmp2;
    }


};
function reverseTheSecondHalf(curr) {
    prev = null;
    temp = null;
    while (curr !== null) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}