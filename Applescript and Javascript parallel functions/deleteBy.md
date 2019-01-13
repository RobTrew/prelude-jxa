```applescript
-- deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
on deleteBy(fnEq, x, xs)
    script go
        property eq : mReturn(fnEq)'s |λ|
        on |λ|(xs)
            if 0 < length of xs then
                tell xs to set {h, t} to {item 1, rest}
                if eq(x, h) then
                    t
                else
                    {h} & |λ|(t)
                end if
            else
                {}
            end if
        end |λ|
    end script
    go's |λ|(xs)
end deleteBy
```

```js
// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
const deleteBy = (fEq, x, xs) => {
    const go = xs => 0 < xs.length ? (
        fEq(x, xs[0]) ? (
            xs.slice(1)
        ) : [xs[0]].concat(go(xs.slice(1)))
    ) : [];
    return go(xs);
};
```