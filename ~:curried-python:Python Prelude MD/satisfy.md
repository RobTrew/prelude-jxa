```js
// satisfy :: (Char -> Bool) -> Parser Char
const satisfy = test =>
    // Any character for which the 
    // given predicate returns true.
    Parser(
        s => 0 < s.length ? (
            test(s[0]) ? [
                Tuple(s[0])(s.slice(1))
             ] : []
        ) : []
    );
```