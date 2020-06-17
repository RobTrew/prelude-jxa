```js
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
// span :: (a -> Bool) -> [a] -> ([a], [a])
const span = p =>
    // Longest prefix of xs consisting of elements which
    // all satisfy p, tupled with the remainder of xs.
    xs => {
        const
            ys = list(xs),
            iLast = ys.length - 1;
        return splitAt(
            until(
                i => iLast < i || !p(ys[i])
            )(i => 1 + i)(0)
        )(ys);
    };
```