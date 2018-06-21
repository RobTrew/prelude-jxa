```js
// tupleFromArray [a] -> (a, a ...)
const tupleFromArray = xs => {
    const lng = xs.length;
    return lng > 1 ? xs.reduce(
        (a, x, i) => Object.assign(a, {
            [i.toString()]: x
        }), {
            type: 'Tuple' + (lng > 2 ? lng.toString() : '')
        }
    ) : undefined;
};
```