```javascript
// concat :: [[a]] -> [a]
const concat = xs =>
    // The concatenation of all the lists
    // in a list of lists.
    xs.flat(1);
```