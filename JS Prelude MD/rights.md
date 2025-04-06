```javascript
// rights :: [Either a b] -> [b]
const rights = xs =>
    // Contents of all Right elements in xs.
    xs.flatMap(
        x => "Right" in x
            ? [x.Right]
            : []
    );
```