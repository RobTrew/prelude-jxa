```javascript
// group :: [a] -> [[a]]
const group = xs =>
    // A list of lists, each containing only
    // elements equal under (===), such that the
    // concatenation of these lists is xs.
    groupBy(a => b => a === b)(xs);
```