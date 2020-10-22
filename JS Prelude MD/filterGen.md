```js
// filterGen :: (a -> Bool) -> Gen [a] -> [a]
const filterGen = p => xs => {
    // Non-finite stream of values which are 
    // drawn from gen, and satisfy p
    function* go() {
        let x = xs.next();
        while (!x.done) {
            let v = x.value;
            if (p(v)) {
                yield v;
            }
            x = xs.next();
        }
    }
    return go(xs);
};
```