```javascript
// isBigInt :: Num -> Bool
const isBigInt = n =>
    ("undefined" !== typeof BigInt) && (
        "bigint" === typeof n
    );
```