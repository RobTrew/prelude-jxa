```javascript
// chop :: ([a] -> (b, [a])) -> [a] -> [b]
const chop = f =>
    // A segmentation of xs by tail recursion with a
    // function which returns a (prefix, residue) tuple.
    xs => {
        const go = xs =>
            0 < xs.length ? (() => {
                const [b, bs] = Array.from(f(xs));
                return cons(b)(go(bs));
            })() : [];
        return go([...xs]);
    };
```


```applescript
-- chop :: ([a] -> (b, [a])) -> [a] -> [b]
on chop(f, xs)
    script go
        property g : mReturn(f)
        on |λ|(xs)
            if 0 < length of xs then
                set {b, ys} to g's |λ|(xs)
                {b} & |λ|(ys)
            else
                {}
            end if
        end |λ|
    end script
    go's |λ|(xs)
end chop
```