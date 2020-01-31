# Notes

We as in me across time.

1. Median of Two Sorted Arrays

> Given the `O(log(n+m))` bound, the solution will likely be in the form of divide and conquer. Since we are working with arrays, index-access will be easy time-wise. In that case we can easily access the median of each array and their relative magnitude will tell us the direction in which (relative to the medians) the median of two arrays resides.

> Turns out there's a special case with 2-2 arrays.

2. Merging k Sorted Linked Lists

> seems pretty trivial to create an O(n) solution:
  
> parallel forward traversal, at each stage (all.nexts at the first step, singleton .next afterwards untill all.nexts are None) determine min value, x.next = min.next, x = x.next, min = min.next...

> this is a naive O(n^2) solution. I wonder how I can optimize this 
        
3. Native Map, Reduce, Filter

> Let's make them recursive, since it's topical.

> Unbelievable that this used to be difficult once. So much that I am concerned I may be missing something.

3. Max Rainwater Capture Calculation

> The O(n) solution seems straightforward if we follow slopes and keep track of direction, local minimum and local maxima

> We'll do two runs: one to determine the 2-tuples of left-right maxima and another to traverse and count the area between them

> to improve: overlooked height[i-1] vs i-1 difference for the second traversal because kept old code; switching to 2-traversal took a few minutes, though it should have been obvious from the get-go (given the context of a linear-time solution) since data from both directions (essentially) is necessary