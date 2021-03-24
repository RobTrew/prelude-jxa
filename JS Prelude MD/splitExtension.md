```javascript
// splitExtension :: FilePath -> (String, String)
const splitExtension = fp => {
    // A tuple of the basename and the extension,
    // in which the latter includes the "."
    const
        xs = fp.split("."),
        lng = xs.length;

    return 1 < lng ? (
        Tuple(
            xs.slice(0, -1).join(".")
        )(
            `.${xs[lng - 1]}`
        )
    ) : Tuple(fp)("");
};
```