```applescript
-- deleteFirst :: a -> [a] -> [a]
on deleteFirst(x, xs)
    script Eq
        on |λ|(a, b)
            a = b
        end |λ|
    end script
 
    deleteBy(Eq, x, xs)
end |delete|
```

```js
// deleteFirst :: a -> [a] -> [a]
const deleteFirst = (x, xs) =>
    0 < xs.length ? (
        x === xs[0] ? (
            xs.slice(1)
        ) : [xs[0]].concat(deleteFirst(x, xs.slice(1)))
    ) : [];
```