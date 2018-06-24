```applescript
-- iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
on iterateUntil(p, f, x)
    script
        property mp : mReturn(p)'s |λ|
        property mf : mReturn(f)'s |λ|
        property lst : {x}
        on |λ|(v)
            repeat until mp(v)
                set v to mf(v)
                set end of lst to v
            end repeat
            return lst
        end |λ|
    end script
    |λ|(x) of result
end iterateUntil
```

```js
// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = (p, f, x) => {
    const vs = [x];
    let h = x;
    while (!p(h))(h = f(h), vs.push(h));
    return vs;
};
```