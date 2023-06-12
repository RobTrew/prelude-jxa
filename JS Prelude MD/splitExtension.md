```javascript
// splitExtension :: FilePath -> (String, String)
const splitExtension = fp => {
    // The file path split before any extension, or
    // tupled with the empty string if no extension is seen.
    const
        lastIndex = [...fp].findLastIndex(
            c => "/.".includes(c)
        );

    return (-1 === lastIndex) || ("." !== fp[lastIndex])
        ? Tuple(fp.slice())("")
        : Tuple(fp.slice(0, lastIndex))(
            fp.slice(lastIndex)
        );
};
```