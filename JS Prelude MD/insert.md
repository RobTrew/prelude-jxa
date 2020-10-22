```javascript
// insert :: Ord a => a -> [a] -> [a]
const insert = x =>
    ys => {
        const [pre, post] = Array.from(break_(y => y >= x)(ys));
        return [...pre, x, ...post];
    };
```