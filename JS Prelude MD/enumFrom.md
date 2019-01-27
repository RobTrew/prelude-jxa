```js
// enumFrom :: Enum a => a -> [a]
function* enumFrom(x) {
    let v = x;
    while (true) {
        yield v;
        v = succ(v);
    }
}
```