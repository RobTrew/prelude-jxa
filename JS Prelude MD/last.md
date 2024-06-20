```javascript
// last :: [a] -> a
const last = xs => {
    // The last item of a list.
    const n = xs.length;

    return 0 < n
        ? xs[n - 1]
        : null;
};
```