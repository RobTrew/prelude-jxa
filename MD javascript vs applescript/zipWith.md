```applescript
-- zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
on zipWith(f, xs, ys)
    set lng to min(|length|(xs), |length|(ys))
    if 1 > lng then return {}
    set xs_ to take(lng, xs) -- Allow for non-finite
    set ys_ to take(lng, ys) -- generators like cycle etc
    set lst to {}
    tell mReturn(f)
        repeat with i from 1 to lng
            set end of lst to |λ|(item i of xs_, item i of ys_)
        end repeat
        return lst
    end tell
end zipWith
```


```javascript
// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = f =>
    // Use of `take` and `length` here allows 
    // zipping with non-finite lists
    // i.e. generators like cycle, repeat, iterate.
    xs => ys => {
        const n = Math.min(length(xs), length(ys));
        return Infinity > n ? (
            (([as, bs]) => Array.from({
                length: n
            }, (_, i) => f(as[i])(
                bs[i]
            )))([xs, ys].map(
                compose(take(n), list)
            ))
        ) : zipWithGen(f)(xs)(ys);
    };
```