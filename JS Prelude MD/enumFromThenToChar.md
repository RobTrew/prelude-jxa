```javascript
// enumFromThenToChar :: Char -> Char -> Char -> [Char]
const enumFromThenToChar = x1 =>
    x2 => y => {
        const [i1, i2, iY] = Array.from([x1, x2, y])
            .map(x => x.codePointAt(0)),
            d = i2 - i1;
        return Array.from({
            length: (Math.floor(iY - i2) / d) + 2
        }, (_, i) => String.fromCodePoint(i1 + (d * i)));
    };
```