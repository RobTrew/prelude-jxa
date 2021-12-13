```javascript
// forestFromJSONLR :: JSON String -> Either String Forest a
const forestFromJSONLR = json => {
    // Either a message string or a Forest.
    // Assumes a recursive [root, nest] JSON format,
    // in which `root` is a parseable value string,
    // and `nest` is a possibly empty list of
    // [`root`, `nest`] pairs.
    const go = vxs =>
        Node(vxs[0])(vxs[1].map(go));

    return bindLR(
        jsonParseLR(json)
    )(
        xs => Right(xs.map(go))
    );
};
```