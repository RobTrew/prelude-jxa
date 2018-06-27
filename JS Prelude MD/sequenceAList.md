```js
// sequenceAList :: Applicative f => [f a] -> f [a]
const sequenceAList = xs =>
    traverseList(x => x, xs);
```