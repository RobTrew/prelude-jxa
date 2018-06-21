```applescript
-- partitionEithers :: [Either a b] -> ([a], [b])on partitionEithers(xs)	set ys to {}	set zs to {}	repeat with x in xs		if isRight(x) then			set end of zs to x		else			set end of ys to x		end if	end repeat	Tuple(ys, zs)end partitionEithers
```

```js
// partitionEithers :: [Either a b] -> ([a], [b])
const partitionEithers = xs =>
    xs.reduce((a, x) =>
        x.Left !== undefined ? (
            Tuple(a[0].concat(x.Left), a[1])
        ) : Tuple(a[0], a[1].concat(x.Right)),
        Tuple([], [])
    );
```