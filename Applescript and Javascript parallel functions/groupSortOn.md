```applescript
-- Sort and group a list by comparing the results of a key function
-- applied to each element. groupSortOn f is equivalent to
-- groupBy eq $ sortBy (comparing f),
-- but has the performance advantage of only evaluating f once for each
-- element in the input list.
-- This is a decorate-(group.sort)-undecorate pattern, as in the
-- so-called 'Schwartzian transform'.
-- Groups are arranged from from lowest to highest.
```

```applescript
-- groupSortOn :: Ord b => (a -> b) -> [a] -> [a]-- groupSortOn :: Ord b => [((a -> b), Bool)]  -> [a] -> [a]on groupSortOn(f, xs)	script keyBool		on |λ|(a, x)			if class of x is boolean then				{asc:x, fbs:fbs of a}			else				{asc:true, fbs:({Tuple(x, asc of a)} & fbs of a)}			end if		end |λ|	end script	set {fs, bs} to {|1|, |2|} of unzip(fbs of foldl(keyBool, ¬		{asc:true, fbs:{}}, flatten({f})))		set intKeys to length of fs	set ca to current application	script dec		property gs : map(my mReturn, fs)		on |λ|(x)			set nsDct to (ca's NSMutableDictionary's ¬				dictionaryWithDictionary:{val:x})			repeat with i from 1 to intKeys				(nsDct's setValue:((item i of gs)'s |λ|(x)) ¬					forKey:(character id (96 + i)))			end repeat			nsDct as record		end |λ|	end script		script descrip		on |λ|(bool, i)			ca's NSSortDescriptor's ¬				sortDescriptorWithKey:(character id (96 + i)) ¬					ascending:bool		end |λ|	end script		script grpUndec		on |λ|(grp)			script				on |λ|(x)					val of x				end |λ|			end script			map(result, grp)		end |λ|	end script		script aEq		on |λ|(p, q)			(a of p) = (a of q)		end |λ|	end script		-- Sorted, grouped, undecorated	map(grpUndec, ¬		groupBy(aEq, ((ca's NSArray's arrayWithArray:map(dec, xs))'s ¬			sortedArrayUsingDescriptors:map(descrip, bs)) as list))end groupSortOn
```

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