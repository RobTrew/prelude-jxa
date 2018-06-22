```applescript
-- Typical usage: groupBy(on(eq, f), xs)
```

```applescript
-- groupBy :: (a -> a -> Bool) -> [a] -> [[a]]on groupBy(f, xs)	set mf to mReturn(f)		script enGroup		on |λ|(a, x)			if length of (active of a) > 0 then				set h to item 1 of active of a			else				set h to missing value			end if						if h is not missing value and mf's |λ|(h, x) then				{active:(active of a) & {x}, sofar:sofar of a}			else				{active:{x}, sofar:(sofar of a) & {active of a}}			end if		end |λ|	end script		if length of xs > 0 then		set dct to foldl(enGroup, {active:{item 1 of xs}, sofar:{}}, tail(xs))		if length of (active of dct) > 0 then			sofar of dct & {active of dct}		else			sofar of dct		end if	else		{}	end ifend groupBy
```

```js
// Typical usage: groupBy(on(eq, f), xs)
```

```js
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = (f, xs) => {
    const tpl = xs.slice(1)
        .reduce((a, x) => {
            const h = a[1].length > 0 ? a[1][0] : undefined;
            return h !== undefined && f(h, x) ? (
                Tuple(a[0], a[1].concat([x]))
            ) : Tuple(a[0].concat([a[1]]), [x]);
        }, Tuple([], xs.length > 0 ? [xs[0]] : []));
    return tpl[0].concat([tpl[1]]);
};
```