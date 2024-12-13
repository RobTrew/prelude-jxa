```javascript
// deleteAt :: Int -> [a] -> [a]
const deleteAt = i =>
    // A copy of xs without any element at i, 
    // if i is a valid index.
    xs => xs.slice(0, i).concat(
        xs.slice(1 + i)
    );
```