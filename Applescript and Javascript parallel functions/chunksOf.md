```applescript
-- chunksOf :: Int -> [a] -> [[a]]
on chunksOf(k, xs)
    script
        on go(ys)
            set ab to splitAt(k, ys)
            set a to |1| of ab
            if isNull(a) then
                {}
            else
                {a} & go(|2| of ab)
            end if
        end go
    end script
    result's go(xs)
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