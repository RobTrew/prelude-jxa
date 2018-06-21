```js
// getFinderDirectory :: IO FilePath
const getFinderDirectory = () =>
    Application('Finder')
    .insertionLocation()
    .url()
    .slice(7);
```