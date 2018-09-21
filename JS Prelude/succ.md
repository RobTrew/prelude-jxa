```js
// succ :: Enum a => a -> a
const succ = x =>
    isChar(x) ? (
        chr(1 + ord(x))
    ) : isNaN(x) ? (
        undefined
    ) : 1 + x;
```