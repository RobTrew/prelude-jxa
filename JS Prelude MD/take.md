```js
// take :: Int -> [a] -> [a]
// take :: Int -> String -> String
const take = n => xs =>
    'GeneratorFunction' !== xs
    .constructor.constructor.name ? (
        xs.slice(0, n)
    ) : [].concat.apply([], Array.from({
        length: n
    }, () => {
        const x = xs.next();
        return x.done ? [] : [x.value];
    }));
```