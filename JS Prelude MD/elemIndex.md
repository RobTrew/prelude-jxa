```javascript
// elemIndex :: Eq a => a -> [a] -> Maybe Int
const elemIndex = x =>
    // Just the index of x in xs, if it is found,
    // or Nothing, if xs does not contain x.
    xs => {
        const i = xs.indexOf(x);
        return -1 === i ? (
            Nothing()
        ) : Just(i);
    };
```