```applescript
-- chunksOf :: Int -> [a] -> [[a]]
on chunksOf(n, xs)
    set lng to length of xs
    script go
        on |λ|(a, i)
            set x to (i + n) - 1
            if x ≥ lng then
                a & {items i thru -1 of xs}
            else
                a & {items i thru x of xs}
            end if
        end |λ|
    end script
    foldl(go, {}, enumFromThenTo(1, n, lng))
end chunksOf
```

```js
// chunksOf :: Int -> [a] -> [[a]]
const chunksOf = (n, xs) =>
    enumFromThenTo(0, n - 1, xs.length - 1)
    .reduce(
        (a, i) => a.concat([xs.slice(i, i + n)]),
        []
    );
```