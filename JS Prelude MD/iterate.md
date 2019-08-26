```js
// iterate :: (a -> a) -> a -> Gen [a]
const iterate = f =>
    function* (x) {
        let v = x;
        while (true) {
            yield(v);
            v = f(v);
        }
    };
```