```js
// take :: Int -> [a] -> [a]
// take :: Int -> String -> String
const take = (n, xs) =>
    xs.constructor.constructor.name !== 'GeneratorFunction' ? (
        xs.slice(0, n)
    ) : [].concat.apply([], Array.from({
        length: n
    }, () => {
        const x = xs.next();
        return x.done ? [] : [x.value];
    }));
```