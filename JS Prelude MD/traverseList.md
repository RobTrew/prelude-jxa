```js
// traverseList :: (Applicative f) => (a -> f b) -> [a] -> f [b]
const traverseList = f =>
    // Collected results of mapping each element
    // of a structure to an action, and evaluating
    // these actions from left to right.
    xs => {
        const lng = xs.length;
        return 0 < lng ? (() => {
            const
                vLast = f(xs[lng - 1]),
                t = vLast.type || 'List';
            return xs.slice(0, -1).reduceRight(
                (ys, x) => liftA2(cons)(f(x))(ys),
                liftA2(cons)(vLast)(pureT(t)([]))
            );
        })() : [
            []
        ];
    };
```