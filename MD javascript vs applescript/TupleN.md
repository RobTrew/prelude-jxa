```javascript
// TupleN :: a -> b ...  -> (a, b ... )
function TupleN() {
    const
        args = Array.from(arguments),
        n = args.length;
    return 2 < n ? Object.assign(
        args.reduce((a, x, i) => Object.assign(a, {
            [i]: x
        }), {
            type: 'Tuple' + n.toString(),
            length: n
        })
    ) : args.reduce((f, x) => f(x), Tuple);
}
```


```applescript
-- Requires N arguments to be wrapped as one list in AS 
-- (the JS version accepts N separate arguments)
-- TupleN :: a -> b ...  -> (a, b ... )
on TupleN(argv)
    tupleFromList(argv)
end TupleN
```