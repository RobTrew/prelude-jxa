```applescript
-- deleteAt :: Int -> [a] -> [a]on deleteAt(i, xs)	set lr to splitAt(i, xs)	set {l, r} to {|1| of lr, |2| of lr}	if length of r > 1 then		l & items 2 thru -1 of r	else		l	end ifend deleteAt
```

```js
// deleteAt :: Int -> [a] -> [a]
const deleteAt = (i, xs) =>
    xs.length >= i ? (() => {
        const lr = splitAt(i, xs);
        return lr[0].concat(lr[1].slice(1));
    })() : xs;
```