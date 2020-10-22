```javascript
// findIndex :: (a -> Bool) -> [a] -> Maybe Int
const findIndex = p =>
    //  Just the index of the first element in
    //  xs for which p(x) is true, or
    //  Nothing if there is no such element.
    xs => {
        const i = [...xs].findIndex(p);
        return -1 !== i ? (
            Just(i)
        ) : Nothing();
    };
```