```javascript
// partitionTree :: (a -> Bool) -> 
// Tree a -> ([Tree a], [Tree a])
const partitionTree = p =>
    // A list of matching subtrees, tupled with a list 
    // which contains the unmatched residue, if any, 
    // of the input tree.
    foldTree(x => vs => {
        const
            [matches, subTree] = second(
                Node(x)
            )(
                [...unzip(vs)].map(
                    v => v.flat()
                )
            );

        return p(x)
            ? Tuple([subTree, ...matches])([])
            : Tuple(matches)([subTree]);
    });
```