```applescript
-- If some of the rows are shorter than the following rows, 
-- their elements are skipped:
-- transpose({{10,11},{20},{},{30,31,32}}) -> {{10, 20, 30}, {11, 31}, {32}}
```

```applescript
-- transpose :: [[a]] -> [[a]]on transpose(xxs)	set intMax to |length|(maximumBy(comparing(my |length|), xxs))	set gaps to replicate(intMax, {})	script padded		on |λ|(xs)			set lng to |length|(xs)			if lng < intMax then				append(xs, items (lng + 1) thru -1 of gaps)			else				xs			end if		end |λ|	end script	set rows to map(padded, xxs)		script cols		on |λ|(_, iCol)			script cell				on |λ|(row)					item iCol of row				end |λ|			end script			concatMap(cell, rows)		end |λ|	end script	map(cols, item 1 of rows)end transpose
```

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