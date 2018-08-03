```applescript
-- cons :: a -> [a] -> [a]
on cons(x, xs)
    if list is class of xs then
        {x} & xs
    else
        x & xs
    end if
end cons
```

```js
// cons :: a -> [a] -> [a]
const cons = (x, xs) =>
    Array.isArray(xs) ? (
        [x].concat(xs)
    ) : (x + xs);
```