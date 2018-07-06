```js
// sequenceA :: (Applicative f, Traversable t) => t (f a) -> f (t a)
const sequenceA = tfa =>
    traverse(id, tfa);
```