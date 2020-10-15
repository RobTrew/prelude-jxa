```js
// tpDictFromTokens :: [(String, String)] -> Dict
const tpDictFromTokens = tokens => {
    // A dictionary of attributes, text and item type
    // derived from a parse of a TaskPaper item.
    const
        dct = tokens.reduce((a, tpl) => {
            const k = tpl[0];
            return Object.assign({}, a,
                Boolean(k) ? {
                    ['data-' + k]: tpl[1]
                } : {
                    lex: a.lex.concat(tpl[1])
                });
        }, {
            lex: []
        }),
        wds = dct.lex;
    return Object.assign({}, dct, {
        'data-type': tpItemTypeFromWords(wds),
        // ['bareString']: tpItemBareString(wds),
        // ['bodyString']: tpItemBodyString(tokens),
        'bodyContentString': tpItemBodyContent(
            tokens
        )
    });
};
```