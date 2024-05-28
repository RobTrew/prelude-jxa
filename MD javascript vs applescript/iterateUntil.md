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
    // Like `until`, but returns a list of
    // intermediate values, where until
    // returns only a final value.
    // iterateUntil(x => 5 < x)(x => 2 * x)(1)
    // -> [1, 2, 4, 8]
    f => x => {
        const
            go = v => p(v)
                ? [v]
                : [v, ...go(f(v))];

        return go(x);
    };
```