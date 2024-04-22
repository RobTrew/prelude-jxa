```javascript
// fType :: (a -> f b) -> f
const fType = g => {
    const s = g.toString();

    return s.includes("Right")
        ? Right
        : s.includes("Left")
            ? Left
            : s.includes("Nothing")
                ? Just
                : s.includes("Node")
                    ? flip(Node)([])
                    : x => [x];
};
```