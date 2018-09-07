```js
// iterate :: (a -> a) -> a -> Generator [a]
function* iterate(f, x) {
    let v = x;
    let i = 1;
    while (true) {
        yield(v);
        v = f(v, i);
        i = 1 + i;
    }
}
```