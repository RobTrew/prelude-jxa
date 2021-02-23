```javascript
// fromEnum :: Enum a => a -> Int
const fromEnum = x =>
    typeof x !== "string" ? (
        x.constructor === Object ? (
            x.value
        ) : parseInt(Number(x), 10)
    ) : x.codePointAt(0);
```