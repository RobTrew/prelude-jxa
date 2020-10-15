```js
// takeWhileP :: (Char -> Bool) -> Parser String
const takeWhileP = p =>
    // The largest prefix in which p is
    // true over all the characters.
    Parser(
        compose(
            pureList, 
            first(concat), 
            span(p)
        )
    );
```