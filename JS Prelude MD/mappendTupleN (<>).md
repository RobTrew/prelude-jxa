```javascript
// mappendTupleN (<>) ::
// (a, b, ...) -> (a, b, ...) -> (a, b, ...)
const mappendTupleN = t => t1 => {
    const lng = t.length;

    return lng === t1.length ? (
        TupleN(
            ...Array.from(t)
            .map((x, i) => mappend(x)(t1[i]))
        )
    ) : undefined;
};
```