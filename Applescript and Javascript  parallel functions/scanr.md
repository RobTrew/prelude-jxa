```applescript
-- scanr :: (b -> a -> b) -> b -> [a] -> [b]
on scanr(f, startValue, xs)
    tell mReturn(f)
        set v to startValue
        set lng to length of xs
        set lst to {startValue}
        repeat with i from lng to 1 by -1
            set v to |λ|(v, item i of xs, i, xs)
            set end of lst to v
        end repeat
        return reverse of lst
    end tell
end scanr
```

```js
// scanr :: (b -> a -> b) -> b -> [a] -> [b]
const scanr = (f, startValue, xs) =>
    xs.reduceRight((a, x) => {
        const v = f(a.acc, x);
        return {
            acc: v,
            scan: [v].concat(a.scan)
        };
    }, {
        acc: startValue,
        scan: [startValue]
    })
    .scan;
```