var reverseList = function(head) {
    prev=new ListNode();
    temp=new ListNode();
    prev=null;
    temp=null;
    curr=head;

    while(curr!==null)
    {
        temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }
    return prev;

};