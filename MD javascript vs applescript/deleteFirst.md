```applescript
-- deleteFirst :: a -> [a] -> [a]
on deleteFirst(x, xs)
    script go
        on |λ|(xs)
            if 0 < length of xs then
                tell xs to set {h, t} to {item 1, rest}
                if x = h then
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
end deleteFirst
```


```javascript
// deleteFirst :: a -> [a] -> [a]
const deleteFirst = x => {
    const go = xs => 0 < xs.length
        ? x === xs[0]
            ? xs.slice(1)
            : [...xs[0], ...go(xs.slice(1))]
        : [];

    return go;
};
```