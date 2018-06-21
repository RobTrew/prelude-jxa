```js
// listFromTuple (a, a ...) -> [a]
const listFromTuple = tpl =>
    Object.keys(tpl)
    .sort()
    .reduce(
        (a, k) => k !== 'type' ? (
            a.concat(tpl[k])
        ) : a, []
    );
```