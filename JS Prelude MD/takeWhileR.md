```javascript
// takeWhileR :: (a -> Bool) -> [a] -> [a]
const takeWhileR = p =>
    // The longest suffix of xs in which
    // all elements satisfy p.
    xs => {
        const ys = list(xs);

        return ys.slice(
            1 + until(
                i => !p(ys[i])
            )(
                i => i - 1
            )(
                ys.length - 1
            )
        );
    };
```