```js
// break :: (a -> Bool) -> [a] -> ([a], [a])
const break_ = p =>
    xs => {
        const iLast = xs.length - 1;
        return splitAt(
            until(i => iLast < i || p(xs[i]))(
                i => 1 + i
            )(0)
        )(xs);
    };
```