```js
// succ :: Enum a => a -> a
const succ = x =>
    isChar(x) ? (
        chr(ord(x) + 1)
    ) : isNaN(x) ? (
        undefined
    ) : x + 1;
```