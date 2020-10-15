```js
// consistentIndentChar :: String -> 
// Either String String
const consistentIndentChar = outlineText => {
    // Either a message or the character (space or tab)
    // consistently used for indentation.
    // A pre-parse check before an attempt to parse
    // a series of lines as an indented outline.
    const indentChars = lines(outlineText)
        .reduce(
            (cs, s) => 1 < cs.length ? cs : [
                ...takeWhile(c => ' \t'.includes(c))(s)
            ].reduce(
                (a, c) => a.includes(c) ? (
                    a
                ) : a.concat(c),
                cs
            ),
            []
        ),
        lng = indentChars.length;
    return 1 < lng ? (
        Left('Mixed indentation: both tabs + spaces')
    ) : 1 > lng ? (
        Left('No indentation detected')
    ) : Right(indentChars[0]);
};
```