```javascript
// partitionTree :: (a -> Bool) -> 
// Tree a -> ([Tree a], [Tree a])
const partitionTree = p =>
    // A list of matching subtrees, tupled with a list 
    // which contains the unmatched residue, if any, 
    // of the input tree.
    foldTree(x => vs => {
        const
            [matches, residues] = [...unzip(vs)].map(
                v => v.flat()
            ),
            subTree = Node(x)(residues);

        return p(x)
            ? Tuple([subTree, ...matches])([])
            : Tuple(matches)([subTree]);
    });
```