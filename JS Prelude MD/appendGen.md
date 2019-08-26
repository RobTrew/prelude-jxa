```js
// appendGen (++) :: Gen [a] -> Gen [a] -> Gen [a]
const appendGen = xs =>
    function* (ys) {
        for (let vs of [xs, ys]) {
            let nxt = vs.next()
            while (!nxt.done) {
                yield nxt.value
                nxt = vs.next()
            }
        }
    };
```