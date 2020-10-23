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


```javascript
// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = p =>
    f => function*(x) {
        let v = x;
        while (!p(v)) {
            yield(v);
            v = f(v);
        }
    };
```