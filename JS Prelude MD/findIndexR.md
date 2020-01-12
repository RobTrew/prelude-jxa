```js
// findIndexR :: (a -> Bool) -> [a] -> Maybe Int
const findIndexR = p =>
    //  Just the index of the last element in
    //  xs for which p(x) is true, or 
    //  Nothing if there is no such element.
    xs => {
        const i = reverse('string' !== typeof xs ? (
            xs
        ) : xs.split('')).findIndex(p);
        return -1 !== i ? (
            Just(xs.length - (1 + i))
        ) : Nothing();
    };
```