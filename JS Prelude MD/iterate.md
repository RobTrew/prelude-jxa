```js
// iterate :: (a -> a) -> a -> Gen [a]
function* iterate(f, x) {
    let v = x;
    while (true) {
        yield(v);
        v = f(v);
    }
}
```