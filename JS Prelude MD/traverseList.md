```javascript
// traverseList :: (Applicative f) => (a -> f b) ->
// [a] -> f [b]
const traverseList = f =>
    // Collected results of mapping each element
    // of a structure to an action, and evaluating
    // these actions from left to right.
    xs => Boolean(xs.length) ? (() => {
        const
            vLast = f(xs.slice(-1)[0]),
            t = typeName(vLast);

        return xs.slice(0, -1).reduceRight(
            (ys, x) => liftA2(cons)(f(x))(ys),
            liftA2(cons)(vLast)(pureT(t)([]))
        );
    })() : fType(f)([]);
```