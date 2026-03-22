```javascript
// groupBy_ :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy_ = eqOp =>
    // A list of lists, each containing only elements
    // equal under the given equality operator, such
    // that the concatenation of these lists is xs.
    // (Alternative – imperative – implementation)
    xs => {
        if (0 === xs.length) return [];

        const acc = [];
        let grp = [xs[0]];

        for (let i = 1; i < xs.length; i++) {
            const x = xs[i];

            // Compared against head of current group.
            if (eqOp(grp[0])(x)) {
                grp.push(x);
            } else {
                // One group completed, another started.
                acc.push(grp);
                grp = [x];
            }
        }

        acc.push(grp);
        return acc;
    };
```