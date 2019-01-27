```js
// fromEnum :: Enum a => a -> Int
const fromEnum = x =>
    typeof x !== 'string' ? (
        x.constructor === Object ? (
            x.index
        ) : parseInt(Number(x))
    ) : x.codePointAt(0);
```