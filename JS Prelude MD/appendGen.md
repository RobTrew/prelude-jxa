```js
// appendGen (++) :: Gen [a] -> Gen [a] -> Gen [a]
function* appendGen(xs, ys) {
    for (let vs of [xs, ys]) {
        let nxt = vs.next()
        while (!nxt.done) {
            yield nxt.value
            nxt = vs.next()
        }
    }
};
```