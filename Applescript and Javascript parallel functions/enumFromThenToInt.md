```applescript
-- enumFromThenToInt :: Int -> Int -> Int -> [Int]on enumFromThenToInt(x1, x2, y)	set xs to {}	repeat with i from x1 to y by (x2 - x1)		set end of xs to i	end repeat	return xsend enumFromThenToInt
```

```js
// enumFromThenToInt :: Int -> Int -> Int -> [Int]
const enumFromThenToInt = (x1, x2, y) => {
    const d = x2 - x1;
    return Array.from({
        length: Math.floor(y - x2) / d + 2
    }, (_, i) => x1 + (d * i));
};
```