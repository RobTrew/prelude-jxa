```javascript
// partition :: (a -> Bool) -> [a] -> ([a], [a])
const partition = p =>
    // A tuple of two lists - those elements in
    // xs which match p, and those which do not.
    xs => {
        const [matches, nons] = [[], []];

        return (
            xs.forEach(x => {
                if (p(x)) {
                    matches.push(x)
                } else {
                    nons.push(x)
                }
            }),
            Tuple(matches)(nons)
        );
    };
```