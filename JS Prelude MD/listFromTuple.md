```js
// listFromTuple :: (a, a ...) -> [a]
const listFromTuple = tpl =>
    Object.keys(tpl)
    .sort()
    .reduce(
        (a, k) => 'type' !== k ? (
            a.concat(tpl[k])
        ) : a, []
    );
```