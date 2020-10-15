```js
// iso8601Day :: Parser Date
const iso8601Day = () => {
    const
        d = digit(),
        hyphen2d = thenBindP(
            char('-')
        )(
            count(2)(d)
        );
    return bindP(
        count(4)(d)
    )(
        y => hyphen2d(
            m => hyphen2d(
                day => pureP(
                    new Date(
                        [y, m, day]
                        .map(concat).join('-')
                    )
                )
            )
        ));
};
```