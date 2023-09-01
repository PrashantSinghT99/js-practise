
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)

}

var middleNode = function (head) {
getSize(head);
if(Math.floor(getSize(head)/2)!==0)
{
  fast=head.next;
  slow=head;

  while(fast!==null)
  {
    fast=fast.next.next;
    slow=slow.next;
  }

}
}




function getSize(head){
    let current = head;
    let size = 0;
    while (current) {
        size++;
        current = current.next;
    }
    return size;
}

function createLinkedList(arr) {
    if (!arr.length) {
        return null;
    }
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
middleNode(createLinkedList([1,2,3,4,5]))


