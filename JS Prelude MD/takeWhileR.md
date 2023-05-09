```javascript
// takeWhileR :: (a -> Bool) -> [a] -> [a]
const takeWhileR = p =>
    // The longest suffix of xs in which
    // all elements satisfy p.
    xs => xs.slice(
        1 + until(
            i => !p(xs[i])
        )(i => i - 1)(
            xs.length - 1
        )
    );
```