```applescript
-- range :: Ix a => (a, a) -> [a]
on range(ab)
    set {a, b} to {|1| of ab, |2| of ab}
    if class of a is list then
        set {xs, ys} to {a, b}
    else
        set {xs, ys} to {{a}, {b}}
    end if
    set lng to length of xs
    
    if lng = length of ys then
        if lng > 1 then
            script
                on |λ|(_, i)
                    enumFromTo(item i of xs, item i of ys)
                end |λ|
            end script
            sequence(map(result, xs))
        else
            enumFromTo(a, b)
        end if
    else
        {}
    end if
end range
```

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
        ab = 1 !== args.length ? (
            args
        ) : args[0],
        [as, bs] = [ab[0], ab[1]].map(
            x => Array.isArray(x) ? (
                x
            ) : (undefined !== x.type) &&
            (x.type.startsWith('Tuple')) ? (
                listFromTuple(x)
            ) : [x]
        ),
        an = as.length;
    return (an === bs.length) ? (
        1 < an ? (
            sequenceAList(as.map((_, i) => enumFromTo(as[i], bs[i])))
        ) : enumFromTo(as[0], bs[0])
    ) : [];
};
```