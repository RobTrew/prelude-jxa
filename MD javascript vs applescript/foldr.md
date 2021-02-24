```javascript
// foldr :: (a -> b -> b) -> b -> [a] -> b
const foldr = f =>
    // Note that that the Haskell signature of foldr differs from that of
    // foldl - the positions of accumulator and current value are reversed
    acc => xs => [...xs].reduceRight(
        (a, x) => f(x)(a),
        acc
    );
```


```applescript
-- foldr :: (a -> b -> b) -> b -> [a] -> b
on foldr(f, startValue, xs)
    tell mReturn(f)
        set v to startValue
        set lng to length of xs
        repeat with i from lng to 1 by -1
            set v to |λ|(item i of xs, v, i, xs)
        end repeat
        return v
    end tell
end foldr
```