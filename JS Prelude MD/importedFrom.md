```javascript
// importedFrom :: CSV String -> FilePath -> IO Dict
const importedFrom = fNames =>
    // eslint-disable-next-line no-new-func
    fp => Function(
        [
            readFile(fp),
            `return { ${fNames} };`
        ]
        .join("\n")
    )();
```