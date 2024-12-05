```javascript
// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
const deleteBy = fEq =>
    // A copy of the given list excluding the first
    // item which matches x in terms of the supplied
    // fEq equality operator.
    x => xs => {
        const i = xs.findIndex(fEq(x));

        return -1 === i
            ? xs.slice(0)
            : xs.slice(0, i).concat(
                xs.slice(1 + i)
            );
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