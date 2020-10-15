```js
// mdLinkFromHTML :: Parser String
const mdLinkFromHTML = () => {
    // A markdown [label](url) string
    // parsed from an HTML `a` tag.
    const
        concatP = fmapP(concat),
        item = anyChar(),
        charsTo = manyTill(item);
    return thenBindP(
        string('<a href="')
    )(
        concatP(many(noneOf('"')))
    )(url => thenBindP(
        charsTo(char('>'))
    )(
        concatP(charsTo(lookAhead(char('<'))))
    )(label => thenP(
        charsTo(string('</a>'))
    )(
        pureP(`[${label}](${url})`)
    )));
};
```