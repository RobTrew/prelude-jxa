```js
// elemIndex :: Eq a => a -> [a] -> Maybe Int
const elemIndex = (x, xs) => {
    const i = xs.indexOf(x);
    return -1 === i ? (
        Nothing()
    ) : Just(i);
};
```