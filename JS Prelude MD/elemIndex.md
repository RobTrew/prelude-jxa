```js
// elemIndex :: Eq a => a -> [a] -> Maybe Int
const elemIndex = (x, xs) => {
    const i = xs.indexOf(x);
    return {
        Nothing: -1 === i,
        Just: i
    };
};
```