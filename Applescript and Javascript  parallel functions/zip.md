```applescript
-- zip :: [a] -> [b] -> [(a, b)]on zip(xs, ys)	set lng to min(length of xs, length of ys)	set lst to {}	repeat with i from 1 to lng		set end of lst to Tuple(item i of xs, item i of ys)	end repeat	return lstend zip
```

```js
// zip :: [a] -> [b] -> [(a, b)]
const zip = (xs, ys) =>
    xs.slice(0, Math.min(xs.length, ys.length))
    .map((x, i) => Tuple(x, ys[i]));
```