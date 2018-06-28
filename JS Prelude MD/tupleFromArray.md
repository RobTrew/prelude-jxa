```js
// tupleFromArray :: [a] -> (a, a ...)
const tupleFromArray = xs => {
    const lng = xs.length;
    return 1 < lng ? xs.reduce(
        (a, x, i) => Object.assign(a, {
            [i.toString()]: x
        }), {
            type: 'Tuple' + (2 < lng ? lng.toString() : '')
        }
    ) : undefined;
};
```