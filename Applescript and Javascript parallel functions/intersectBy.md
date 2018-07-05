```applescript
-- intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
on intersectBy(eq, xs, ys)
    if length of xs > 0 and length of ys > 0 then
        set p to curry(eq)
        script matchFound
            on |λ|(x)
                any(p's |λ|(x), ys)
            end |λ|
        end script
        
        filter(matchFound, xs)
    else
        {}
    end if
end intersectBy
```

```js
// intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const intersectBy = (eq, xs, ys) => {
    const ceq = curry(eq);
    return (0 < xs.length && 0 < ys.length) ?
    xs.filter(x => ys.some(ceq(x))) : [];
};
```