```js
// takeWhileEscP :: Char -> (Char -> Bool) -> 
// (Char -> Bool) -> Parser Text
const takeWhileEscP = esc =>
    escTest => test => {
        // Longest prefix, including any escaped
        // characters, in which escTest returns
        // true for all escaped characters, and
        // test returns true for all other chars.
        const plain = takeWhileP(
            c => (esc !== c) && test(c)
        );
        const escaped = thenBindP(
            char(esc)
        )(
            anyChar()
        )(x => bindP(
            plain
        )(
            compose(pureP, cons(x))
        ));
        return bindP(
            plain
        )(x => bindP(
            many(escaped)
        )(xs => pureP(concat([x].concat(xs)))));
    };
```