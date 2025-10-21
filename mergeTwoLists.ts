// mergeTwoLists.ts
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Merge two sorted linked lists and return it as a new sorted list.
 * Time Complexity: O(m + n)
 * Space Complexity: O(m + n)
 */
export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

/** Helper function to convert array → linked list */
export function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

/** Helper function to print linked list as array */
export function printLinkedList(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Example usage:
// const list1 = createLinkedList([1, 2, 4])
// const list2 = createLinkedList([1, 3, 4])

// console.log("List 1:", printLinkedList(list1))
// console.log("List 2:", printLinkedList(list2))

// const merged = mergeTwoLists(list1, list2)

// console.log("Merged List:", printLinkedList(merged))

