```js
// unionBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const unionBy = fnEq => xs => ys => {
    const sx = nubBy(fnEq)(xs);
    return sx.concat(
        sx.reduce(
            (a, x) => deleteBy(fnEq)(
                x
            )(a),
            nubBy(fnEq)(ys)
        )
    );
};
```