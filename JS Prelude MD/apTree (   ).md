```js
// apTree (<*>) :: Tree (a -> b) -> Tree a -> Tree b
const apTree = tf =>
    // A new tree derived by applying each of a tree
    // of functions to each node value in another tree.
    liftA2Tree(
        x => x
    )(tf)
```