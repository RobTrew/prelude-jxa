```js
// forestFromGingkos ::
// [Gingko {content: String, children: [Gingko]}]
// -> [Tree String]
const stringForestFromGingkos = xs => {
    // Data Tree node list derived from structure
    // of JSON used by https://gingkoapp.com
    const go = x => Node(x.content)(
        x.children.map(go)
    );
    return xs.map(go)
};
```