// mergeTwoLists.test.ts
import { ListNode, mergeTwoLists, createLinkedList, printLinkedList } from "./mergeTwoLists";

describe("mergeTwoLists", () => {
  test("merges two sorted linked lists", () => {
    const list1 = createLinkedList([1, 2, 4]);
    const list2 = createLinkedList([1, 3, 4]);

    const merged = mergeTwoLists(list1, list2);
    expect(printLinkedList(merged)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test("works when one list is empty", () => {
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([0]);
    const merged = mergeTwoLists(list1, list2);
    expect(printLinkedList(merged)).toEqual([0]);
  });

  test("works when both lists are empty", () => {
    const merged = mergeTwoLists(null, null);
    expect(printLinkedList(merged)).toEqual([]);
  });

  test("handles uneven list lengths", () => {
    const list1 = createLinkedList([1, 3, 5, 7]);
    const list2 = createLinkedList([2, 4]);
    const merged = mergeTwoLists(list1, list2);
    expect(printLinkedList(merged)).toEqual([1, 2, 3, 4, 5, 7]);
  });

  test("handles identical lists", () => {
    const list1 = createLinkedList([2, 2, 2]);
    const list2 = createLinkedList([2, 2]);
    const merged = mergeTwoLists(list1, list2);
    expect(printLinkedList(merged)).toEqual([2, 2, 2, 2, 2]);
  });
});
