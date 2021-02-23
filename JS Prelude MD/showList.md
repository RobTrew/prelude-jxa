```javascript
// showList :: [a] -> String
const showList = xs => {
    const
        s = xs.map(show)
        .join(", ")
        .replace(/[\\"]/gu, "");

    return `[${s}]`;
};
```