```js
// enumFrom :: Enum a => a -> [a]
function* enumFrom(x) {
    // A non-finite succession of enumerable
    // values, starting with the value x.
    let v = x;
    while (true) {
        yield v;
        v = succ(v);
    }
}
```