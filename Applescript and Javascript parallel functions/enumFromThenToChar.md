```applescript
-- enumFromThenToChar :: Char -> Char -> Char -> [Char]
on enumFromThenToChar(x1, x2, y)
    set {int1, int2, intY} to {id of x1, id of x2, id of y}
    set xs to {}
    repeat with i from int1 to intY by (int2 - int1)
        set end of xs to character id i
    end repeat
    return xs
end enumFromThenToChar
```

```js
// enumFromThenToChar :: Char -> Char -> Char -> [Char]
const enumFromThenToChar = (x1, x2, y) => {
    const [i1, i2, iY] = Array.from([x1, x2, y])
        .map(x => x.charCodeAt(0)),
        d = i2 - i1;
    return Array.from({
        length: (Math.floor(iY - i2) / d) + 2
    }, (_, i) => String.fromCodePoint(i1 + (d * i)));
};
```