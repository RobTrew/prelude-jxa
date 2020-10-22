```javascript
// nub :: [a] -> [a]
const nub = xs => 
  nubBy(eq)(xs);
```