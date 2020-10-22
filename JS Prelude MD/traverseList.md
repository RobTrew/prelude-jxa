```js
// traverseList :: (Applicative f) => (a -> f b) -> [a] -> f [b]
const traverseList = f =>
    // Collected results of mapping each element
    // of a structure to an action, and evaluating
    // these actions from left to right.
    xs => (
        zs => 0 < zs.length ? (() => {
            const
                vLast = f(zs.slice(-1)[0]),
                t = vLast.type || 'List';
            return zs.slice(0, -1).reduceRight(
                (ys, z) => liftA2(cons)(f(z))(ys),
                liftA2(cons)(vLast)(pureT(t)([]))
            );
        })() : fType(f)([])
    )(list(xs));
```