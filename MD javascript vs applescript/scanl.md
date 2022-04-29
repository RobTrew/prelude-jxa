```javascript
// scanl :: (b -> a -> b) -> b -> [a] -> [b]
const scanl = f => startValue => xs =>
    // The series of interim values arising
    // from a catamorphism. Parallel to foldl.
    xs.constructor.constructor.name !== (
        "GeneratorFunction"
    ) ? (
        xs.reduce((a, x) => {
            const v = f(a[0])(x);

            return [v, a[1].concat(v)];
        }, [startValue, [startValue]])[1]
    ) : scanlGen(f)(startValue)(xs);
```


```applescript
-- scanl :: (b -> a -> b) -> b -> [a] -> [b]
on scanl(f, startValue, xs)
    tell mReturn(f)
        set v to startValue
        set lng to length of xs
        set lst to {startValue}
        repeat with i from 1 to lng
            set v to |λ|(v, item i of xs, i, xs)
            set end of lst to v
        end repeat
        return lst
    end tell
end scanl
```