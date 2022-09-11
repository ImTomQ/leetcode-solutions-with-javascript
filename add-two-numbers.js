/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (list1, list2) {
  const list3 = new ListNode();
  let prev = list3;
  let surplus = 0;
  let sum = 0;

  while (list1 || list2) {
    sum = (list1?.val || 0) + (list2?.val || 0) + surplus;
    if (sum >= 10) {
      prev.next = new ListNode(sum - 10);
      surplus = 1;
    } else {
      surplus = 0;
      prev.next = new ListNode(sum);
    }
    list1 = list1?.next || 0;
    list2 = list2?.next || 0;
    prev = prev.next;
  }
  if (surplus) {
    prev.next = new ListNode(1);
  }
  return list3.next;
};

// create first linked list: 1 -> 3 -> 10
var n3 = new ListNode(5, null);
var n2 = new ListNode(3, n3);
var n1 = new ListNode(1, n2);
var L1 = n1;

// create second linked list: 5 -> 6 -> 9
var n6 = new ListNode(9, null);
var n5 = new ListNode(6, n6);
var n4 = new ListNode(5, n5);
var L2 = n4;

addTwoNumbers(L1, L2);
