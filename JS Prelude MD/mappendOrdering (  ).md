```js
// mappendOrdering (<>) :: Ordering -> Ordering -> Ordering
const mappendOrdering = (a, b) => eqOrdering(EQ, a) ? b : a;
```