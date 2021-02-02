```applescript
-- apTree (<*>) :: Tree (a -> b) -> Tree a -> Tree b
on apTree(tf, tx)
    set fmap to curry(my fmapTree)
    script go
        on |λ|(t)
            set f to root of t
            Node(mReturn(f)'s |λ|(root of tx), ¬
                map(fmap's |λ|(f), nest of tx) & ¬
                map(go, nest of t))
        end |λ|
    end script
    
    return go's |λ|(tf)
end apTree
```


```javascript
// apTree (<*>) :: Tree (a -> b) -> Tree a -> Tree b
const apTree = tf =>
    // A new tree derived by applying each of a tree
    // of functions to each node value in another tree.
    liftA2Tree(
        x => x
    )(tf);
```