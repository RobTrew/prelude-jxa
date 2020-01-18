```js
// cons :: a -> [a] -> [a]
const cons = x =>
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