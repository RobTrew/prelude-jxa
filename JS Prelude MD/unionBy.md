```javascript
// unionBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const unionBy = fnEq =>
    // The union of xs and ys in terms of the
    // equality function given in fnEq
    xs => ys => {
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