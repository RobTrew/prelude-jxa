```javascript
// appendGen (++) :: Gen [a] -> Gen [a] -> Gen [a]
const appendGen = xs =>
    // A new generator composed from the
    // concatenation of two existing generators.
    function *(ys) {
        for (const vs of [xs, ys]) {
            let nxt = vs.next();

            while (!nxt.done) {
                yield nxt.value;
                nxt = vs.next();
            }
        }
    };
```