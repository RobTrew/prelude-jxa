```js
// apTree (<*>) :: Tree (a -> b) -> Tree a -> Tree b
const apTree = tf =>
    liftA2Tree(x => x)(tf)
```