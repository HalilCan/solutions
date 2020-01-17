# tMerge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
# Example:
# Input:
# [
#  1->4->5,
#  1->3->4,
#   2->6
# ]
# Output: 1->1->2->3->4->4->5->6

# Definition for singly-linked list.


class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        # seems pretty trivial to create an O(n) solution:
        # parallel forward traversal, at each stage (all.nexts at the first step, singleton .next afterwards untill all.nexts are None) determine min value, x.next = (node of) min.next, p-rev.next = (node of) min,
        list_count = len(lists)
        end = 0

        new_node = None
        first_node = None

        while end < list_count:
            min_index = 0
            while lists[min_index] is None:
                min_index += 1
                if min_index >= list_count - 1:
                    end = list_count
                    break

            for i in range(0, list_count):
                node = lists[i]
                if node is None:
                    continue
                elif node.val <= lists[min_index].val:
                    min_index = i
                else:
                    continue
            
            if new_node is None:
                new_node = ListNode(lists[min_index].val)
                first_node = new_node
            else:
                new_node.next = ListNode(lists[min_index].val)
                new_node = new_node.next

            lists[min_index] = lists[min_index].next
        new_node.next = None

        return first_node


list1 = ListNode(1)
top1 = list1
list2 = ListNode(2)
top2 = list2
list3 = ListNode(3)
top3 = list3
for i in range(4, 12):
    nLN = ListNode(i)
    if i % 4 == 0:
        list1.next = nLN
        list1 = list1.next
    elif i % 2 == 0 and i % 4 != 0:
        list2.next = nLN
        list2 = list2.next
    else:
        list3.next = nLN
        list3 = list3.next
lists = [top1, top2, top3]

solution = Solution()
sol_node = solution.mergeKLists(lists)
ch = 1
while ch != 0:
    if sol_node is None:
        ch = 1
        break
    print(sol_node.val)
    sol_node = sol_node.next


# this is a naive O(n^2) solution. I wonder how I can optimize this 