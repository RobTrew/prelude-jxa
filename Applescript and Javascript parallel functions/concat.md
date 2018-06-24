```applescript
-- concat :: [[a]] -> [a]-- concat :: [String] -> Stringon concat(xs)	if length of xs > 0 and class of (item 1 of xs) is string then		set acc to ""	else		set acc to {}	end if	repeat with i from 1 to length of xs		set acc to acc & item i of xs	end repeat	accend concat
```

```js
// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs =>
    xs.length > 0 ? (() => {
        const unit = 'string' === typeof xs[0] ? '' : [];
        return unit.concat.apply(unit, xs);
    })() : [];
```