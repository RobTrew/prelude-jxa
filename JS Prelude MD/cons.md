```js
// cons :: a -> [a] -> [a]
const cons = x =>
    // A list constructed from the item x,
    // followed by the existing list xs.
    xs => Array.isArray(xs) ? (
        [x].concat(xs)
    ) : 'GeneratorFunction' !== xs
    .constructor.constructor.name ? (
        x + xs
    ) : ( // cons(x)(Generator)
        function* () {
            yield x;
            let nxt = xs.next()
            while (!nxt.done) {
                yield nxt.value;
                nxt = xs.next();
            }
        }
    )();
```