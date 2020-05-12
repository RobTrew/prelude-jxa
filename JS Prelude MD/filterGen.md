```js
// filter :: (a -> Bool) -> Gen [a] -> [a]
const filterGen = p => xs => {
    function* go() {
        let x = xs.next();
        while (!x.done) {
            let v = x.value;
            if (p(v)) {
                yield v
            }
            x = xs.next();
        }
    }
    return go(xs);
}
```