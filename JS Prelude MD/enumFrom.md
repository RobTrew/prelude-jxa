```javascript
// enumFrom :: Enum a => a -> [a]
const enumFrom = function* (x) {
    // A non-finite succession of enumerable
    // values, starting with the value x.
    let v = x;

    while (true) {
        yield v;
        v = succ(v);
    }
};
```