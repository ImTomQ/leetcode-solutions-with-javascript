/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const listnode = new ListNode(null);
  let prev = listnode;

  while (head) {
    if (prev.val !== head.val) {
      prev.next = head;
      prev = prev.next;
    }
    head = head.next;
  }
  if (head == null) {
    prev.next = null;
  }
  return listnode.next;
};
