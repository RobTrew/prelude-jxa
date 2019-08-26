```js
// - Map each element of a structure to an action,
// - evaluate these actions from left to right,
// - and collect the results.

//    traverse f = List.foldr cons_f (pure [])
//      where cons_f x ys = liftA2 (:) (f x) ys
```

```js
// traverseList :: (Applicative f) => (a -> f b) -> [a] -> f [b]
const traverseList = f => xs => {
    const lng = xs.length;
    return 0 < lng ? (() => {
        const
            vLast = f(xs[lng - 1]),
            t = vLast.type || 'List';
        return xs.slice(0, -1).reduceRight(
            (ys, x) => liftA2(cons)(f(x))(ys),
            liftA2(cons)(vLast)(pureT(t, []))
        );
    })() : [[]];
};
```