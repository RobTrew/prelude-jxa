```applescript
-- span, applied to a predicate p and a list xs, returns a tuple of xs of elements that satisfy p and second element is the remainder of the list:
-- 
-- > span (< 3) [1,2,3,4,1,2,3,4] == ([1,2],[3,4,1,2,3,4])
-- > span (< 9) [1,2,3] == ([1,2,3],[])
-- > span (< 0) [1,2,3] == ([],[1,2,3])
-- 
-- span p xs is equivalent to (takeWhile p xs, dropWhile p xs) 
```

```applescript
-- span :: (a -> Bool) -> [a] -> ([a], [a])
on span(f, xs)
    set lng to length of xs
    set i to 0
    tell mReturn(f)
        repeat while i < lng and |λ|(item (i + 1) of xs)
            set i to i + 1
        end repeat
    end tell
    splitAt(i, xs)
end span
```

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
const span = (p, xs) =>
    splitAt(until(
        i => !p(xs[i]),
        i => 1 + i,
        0
    ), xs);
```