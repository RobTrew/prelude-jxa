```js
// reverse :: [a] -> [a]
const reverse = xs =>
    typeof xs === 'string' ? (
        xs.split('')
        .reverse()
        .join('')
    ) : xs.slice(0)
    .reverse();
```