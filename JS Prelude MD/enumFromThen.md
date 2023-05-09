```javascript
// enumFromThen :: Int -> Int -> Gen [Int]
const enumFromThen = x =>
    // A non-finite stream of integers,
    // starting with x and y, and continuing
    // with the same interval.
    function* (y) {
        const d = y - x;
        let v = y + d;

        yield x;
        yield y;
        while (true) {
            yield v;
            v = d + v;
        }
    };
```