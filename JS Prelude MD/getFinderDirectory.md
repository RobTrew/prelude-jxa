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