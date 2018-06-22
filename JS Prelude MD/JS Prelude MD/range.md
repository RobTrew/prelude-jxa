```js
// The list of values in the subrange defined by a bounding pair.

// range([0, 2]) -> [0,1,2]
// range([[0,0], [2,2]]) 
//  -> [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
// range([[0,0,0],[1,1,1]])
//  -> [[0,0,0],[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1]]
```

```js
// range :: Ix a => (a, a) -> [a]
function range() {
    const
        args = Array.from(arguments),
        ab = args.length !== 1 ? (
            args
        ) : args[0],
        [as, bs] = [ab[0], ab[1]].map(
            x => Array.isArray(x) ? (
                x
            ) : (x.type !== undefined) &&
            (x.type.startsWith('Tuple')) ? (
                listFromTuple(x)
            ) : [x]
        ),
        an = as.length;
    return (an === bs.length) ? (
        an > 1 ? (
            sequenceAList(as.map((_, i) => enumFromTo(as[i], bs[i])))
        ) : enumFromTo(as[0], bs[0])
    ) : [];
};
```