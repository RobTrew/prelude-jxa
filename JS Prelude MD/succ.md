```javascript
// succ :: Enum a => a -> a
const succ = x => {
    const t = typeof x;

    return "number" !== t ? (
        "bigint" !== t ? (
            (() => {
                const [i, mx] = [x, maxBound(x)].map(fromEnum);

                return i < mx ? (
                    toEnum(x)(1 + i)
                ) : Error("succ :: enum out of range.");
            })()
        ) : BigInt(1) + x
    ) : x < Number.MAX_SAFE_INTEGER ? (
        1 + x
    ) : Error("succ :: Num out of range.");
};
```