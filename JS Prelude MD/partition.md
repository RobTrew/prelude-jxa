```javascript
// partition :: (a -> Bool) -> [a] -> ([a], [a])
const partition = p =>
    // A tuple of two lists - those elements in
    // xs which match p, and those which do not.
    xs => {
        const
            notP = x => !p(x),
            vs = [...xs];

        return Tuple(
            vs.filter(p)
        )(
            vs.filter(notP)
        );
    };
```