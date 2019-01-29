```applescript
-- getFinderDirectory :: IO FilePath
on getFinderDirectory()
    tell application "Finder" to POSIX path of (insertion location as alias)
end getFinderDirectory
```

```js
// getFinderDirectory :: IO FilePath
const getFinderDirectory = () =>
    decodeURIComponent(
        Application('Finder')
        .insertionLocation()
        .url()
        .slice(7)
    );
```