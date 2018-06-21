```js
// If some of the rows are shorter than the following rows, 
// their elements are skipped:
// > transpose [[10,11],[20],[],[30,31,32]] == [[10,20,30],[11,31],[32]]
// transpose :: [[a]] -> [[a]]
```

```js
// transpose :: [[a]] -> [[a]]
const transpose = tbl => {
    const
        gaps = replicate(
            length(maximumBy(comparing(length), tbl)), []
        ),
        rows = map(xs => xs.concat(gaps.slice(xs.length)), tbl);
    return map(
        (_, col) => concatMap(row => [row[col]], rows),
        rows[0]
    );
};
```