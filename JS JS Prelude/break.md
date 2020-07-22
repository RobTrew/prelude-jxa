```js
// break :: (a -> Bool) -> [a] -> ([a], [a])
const break_ = p =>
    xs => {
        const 
            iLast = xs.length - 1,
            ys = [...xs];
        return splitAt(
            until(i => iLast < i || p(ys[i]))(
                i => 1 + i
            )(0)
        )(ys);
    };
```