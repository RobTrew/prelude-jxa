```javascript
// showList :: [a] -> String
const showList = xs =>
    '[' + xs.map(show)
    .join(', ')
    .replace(/[\"]/g, '') + ']';
```