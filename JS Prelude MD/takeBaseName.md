```javascript
// takeBaseName :: FilePath -> String
const takeBaseName = fp =>
    // The filename without any extension.
    ("" !== fp) ? (
        ("/" !== fp[fp.length - 1]) ? (() => {
            const fn = fp.split("/").slice(-1)[0];

            return fn.includes(".") ? (
                fn.split(".").slice(0, -1)
                .join(".")
            ) : fn;
        })() : ""
    ) : "";
```