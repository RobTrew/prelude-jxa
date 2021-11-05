```javascript
// scanr :: (a -> b -> b) -> b -> [a] -> [b]
const scanr = f =>
    startValue => xs => xs.reduceRight(
        (a, x) => {
            const v = f(x)(a[0]);

            return Tuple(v)([v].concat(a[1]));
        }, Tuple(startValue)([startValue])
    )[1];
```


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