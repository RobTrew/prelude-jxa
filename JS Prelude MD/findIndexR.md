```javascript
// findIndexR :: (a -> Bool) -> [a] -> Maybe Int
const findIndexR = p =>
    //  Just the index of the last element in
    //  xs for which p(x) is true, or
    //  Nothing if there is no such element.
    xs => {
        const i = reverse([...xs]).findIndex(p);

        return -1 !== i
            ? Just(xs.length - (1 + i))
            : Nothing();
    };
```