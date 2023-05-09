```javascript
// map :: (a -> b) -> [a] -> [b]
const map = f =>
    // The list obtained by applying f
    // to each element of xs.
    // (The image of xs under f).
    xs => [...xs].map(f);
```