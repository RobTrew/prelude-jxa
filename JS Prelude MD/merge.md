```js
// merge :: Ord a => [a] -> [a] -> [a]
const merge = xs =>
    // An ordered list derived by merging
    // two other ordered lists.
    mergeBy(compare)(xs);
```