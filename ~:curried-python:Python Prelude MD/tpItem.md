```js
// tpItem :: Parser Dict
const tpItem = () =>
    // The attributes, item type and text 
    // of a TaskPaper item.
    fmapP(tpDictFromTokens)(
        many(token(
            altP(tpTag())(tpLiteral())
        ))
    );
```