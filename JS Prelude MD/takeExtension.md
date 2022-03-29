```javascript
// takeExtension :: FilePath -> String
const takeExtension = fp => {
    const fn = last(fp.split("/"));

    return fn.includes(".") ? (
        `.${last(fn.split("."))}`
    ) : "";
};
```