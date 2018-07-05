```applescript
-- tupleFromArray :: [a] -> (a, a ...)
on tupleFromArray(xs)
    set lng to length of xs
    if 1 < lng then
        if 2 < lng then
            set strSuffix to lng as string
        else
            set strSuffix to ""
        end if
        script kv
            on |λ|(a, x, i)
                insertMap(a, (i as string), x)
            end |λ|
        end script
        foldl(kv, {type:"Tuple" & strSuffix}, xs) & {length:lng}
    else
        missing value
    end if
end tupleFromArray
```

```js
// tupleFromArray :: [a] -> (a, a ...)
const tupleFromArray = xs => {
    const lng = xs.length;
    return 1 < lng ? xs.reduce(
        (a, x, i) => Object.assign(a, {
            [i.toString()]: x
        }), {
            type: 'Tuple' + (2 < lng ? lng.toString() : '')
        }
    ) : undefined;
};
```