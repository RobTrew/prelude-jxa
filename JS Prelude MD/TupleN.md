```js
// TupleN :: a -> b ...  -> (a, b ... )
function TupleN() {
    const
        args = Array.from(arguments),
        n = args.length;
    return 1 < n ? Object.assign(
        args.reduce((a, x, i) => Object.assign(a, {
            [i]: x
        }), {
            type: 'Tuple' + (2 < n ? n.toString() : ''),
            length: n
        })
    ) : args[0];
};
```