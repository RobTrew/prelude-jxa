```js
// Sort and group a list by comparing the results of a key function
// applied to each element. groupSortOn f is equivalent to
// groupBy eq $ sortBy (comparing f),
// but has the performance advantage of only evaluating f once for each
// element in the input list.
// This is a decorate-(group.sort)-undecorate pattern, as in the
// so-called 'Schwartzian transform'.
// Groups are arranged from from lowest to highest.
```

```js
// groupSortOn :: Ord b => (a -> b) -> [a] -> [a]
// groupSortOn :: Ord b => [((a -> b), Bool)]  -> [a] -> [a]
const groupSortOn = (f, xs) => {
    // Functions and matching bools derived from argument f
    // which is a single key function
    const fsbs = unzip(
            flatten([f])
            .reduceRight((a, x) =>
                'boolean' === typeof x ? {
                    asc: x,
                    fbs: a.fbs
                } : {
                    asc: true,
                    fbs: [
                        [x, a.asc]
                    ].concat(a.fbs)
                }, {
                    asc: true,
                    fbs: []
                })
            .fbs
        ),
        [fs, bs] = [fsbs[0], fsbs[1]],
        iLast = fs.length;
    // decorate-sort-group-undecorate
    return groupBy(
            (p, q) => p[0] === q[0],
            sortBy(
                mappendComparing(
                    // functions that access pre-calculated values by position
                    // in the decorated ('Schwartzian') version of xs
                    zip(fs.map((_, i) => x => x[i]), bs)
                ), xs.map( // xs decorated with precalculated key function values
                    x => fs.reduceRight(
                        (a, g) => [g(x)].concat(a), [
                            x
                        ]
                    )
                )
            )
        )
        .map(gp => gp.map(x => x[iLast])); // undecorated version of data, post sort
};
```