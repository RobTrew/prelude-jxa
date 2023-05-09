```javascript
// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
const deleteBy = fEq =>
    // A copy of the given list excluding the first
    // item which matches x in terms of the supplied
    // fEq equality operator.
    x => {
        const go = xs => Boolean(xs.length) ? (
            fEq(x)(xs[0]) ? (
                xs.slice(1)
            ) : [xs[0], ...go(xs.slice(1))]
        ) : [];

        return go;
    };
```


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