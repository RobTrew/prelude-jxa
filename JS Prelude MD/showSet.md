```javascript
// showSet :: Set a -> String
const showSet = oSet => {
    const
        s = Array.from(oSet)
        .map(x => x.toString())
        .join(",");

    return `{${s}}`;
};
```