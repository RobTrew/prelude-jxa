```js
// cons :: a -> [a] -> [a]
const cons = (x, xs) =>
    Array.isArray(xs) ? (
        [x].concat(xs)
    ) : 'GeneratorFunction' !== xs.constructor.constructor.name ? (
        x + xs
    ) : ( // Wrapping existing generator to prepend one element
        function* gen() {
            yield x;
            let nxt = xs.next()
            while (!xs.done) {
                yield nxt.value;
                nxt = xs.next();
            }
        }
    )();
```