```javascript
// delete :: Eq a => a -> [a] -> [a]
const delete_ = x =>
    // xs with first instance of x (if any) removed.
    xs => {
        const i = xs.findIndex(v => x === v);

        return -1 === i
            ? xs.slice(0)
            : xs.slice(0, i).concat(
                xs.slice(1 + i)
            );
    };
```