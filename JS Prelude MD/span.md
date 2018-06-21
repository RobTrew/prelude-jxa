```applescript
// span, applied to a predicate p and a list xs, returns a tuple of xs of 
// elements that satisfy p and second element is the remainder of the list:
//
// > span (< 3) [1,2,3,4,1,2,3,4] == ([1,2],[3,4,1,2,3,4])
// > span (< 9) [1,2,3] == ([1,2,3],[])
// > span (< 0) [1,2,3] == ([],[1,2,3])
//
// span p xs is equivalent to (takeWhile p xs, dropWhile p xs) 
```

```js
// span :: (a -> Bool) -> [a] -> ([a],[a])
const span = (f, xs) =>
    splitAt(until(
        i => !f(xs[i]),
        i => i + 1,
        0
    ), xs);
```