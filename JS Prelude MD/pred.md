```js
// pred :: Enum a => a -> a
const pred = x =>
    isChar(x) ? (
        chr(ord(x) - 1)
    ) : isNaN(x) ? (
        undefined
    ) : x - 1;
```