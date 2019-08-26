```js
// Sort a list by comparing the results of a key function applied to each
// element. sortOn f is equivalent to sortBy (comparing f), but has the
// performance advantage of only evaluating f once for each element in
// the input list. This is called the decorate-sort-undecorate paradigm,
// or Schwartzian transform.
// Elements are arranged from from lowest to highest.
```

```js
// sortOn :: Ord b => (a -> b) -> [a] -> [a]
const sortOn = f => xs => {
    // Functions and matching bools derived from argument f
    // which may be a single key function, or a list of key functions
    // each of which may or may not be followed by a direction bool.
    const fsbs = unzip(
            flatten([f])
            .reduceRight((a, x) =>
                ('boolean' === typeof x) ? {
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
    // decorate-sort-undecorate
    return sortBy(mappendComparing_(
            // functions that access pre-calculated values
            // by position in the decorated ('Schwartzian')
            // version of xs
            zip(fs.map((_, i) => x => x[i]))(bs)
        ), xs.map( // xs decorated with precalculated values
            x => fs.reduceRight(
                (a, g) => [g(x)].concat(a), [
                    x
                ])))
        .map(x => x[iLast]); // undecorated version of data, post sort.
};
```