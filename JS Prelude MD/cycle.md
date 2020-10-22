```javascript
// cycle :: [a] -> Generator [a]
function* cycle(xs) {
    const lng = xs.length;
    let i = 0;
    while (true) {
        yield(xs[i]);
        i = (1 + i) % lng;
    }
}
```