```javascript
// levels :: Tree a -> [[a]]
const levels = tree =>
    map(map(root))(
        takeWhile(xs => 0 < xs.length)(
            iterate(concatMap(nest))([
                tree
            ])
        )
    );
```