```applescript
-- mappendComparing :: [(a -> b)] -> (a -> a -> Ordering)on mappendComparing(fs)	script		on |λ|(x, y)			script				on |λ|(ordr, f)					if ordr ≠ 0 then						ordr					else						tell mReturn(f)							compare(|λ|(x), |λ|(y))						end tell					end if				end |λ|			end script			foldl(result, 0, fs)		end |λ|	end scriptend mappendComparing
```

```js
// mappendComparing :: [(a -> b)] -> (a -> a -> Ordering)
const mappendComparing = fs =>
    (x, y) => fs.reduce(
        (ordr, f) => ordr || compare(f(x), f(y)),
        0
    );
```