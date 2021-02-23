```javascript
// isSubsetOf :: Ord a => Set a -> Set a -> Bool
const isSubsetOf = a => b => {
    for (const x of a) {
        if (!b.has(x)) {
            return false;
        }
    }

    return true;
};
```