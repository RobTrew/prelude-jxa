```javascript
// enumFromToChar :: Char -> Char -> [Char]
const enumFromToChar = m => n => {
    const [intM, intN] = [m, n].map(x => x.codePointAt(0));
    return Array.from({
        length: Math.floor(intN - intM) + 1
    }, (_, i) => String.fromCodePoint(intM + i));
};
```