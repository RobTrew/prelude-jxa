```javascript
// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = p =>
    // The value resulting from successive applications
    // of f to f(x), starting with a seed value x,
    // and terminating when the result returns true
    // for the predicate p.
    f => x => {
        let v = x;

        const xs = [v];

        while (!p(v)) {
            v = f(v);
            xs.push(v);
        }

        return xs;
    };
```


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