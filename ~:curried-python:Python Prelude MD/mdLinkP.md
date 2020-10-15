```js
// mdLinkP :: () -> Parser Dict
const mdLinkP = () =>
    thenBindP(
        char('[')
    )(
        takeWhileP(ne(']'))
    )(title => thenBindP(
        string('](')
    )(
        takeWhileP(ne(')'))
    )(link => thenP(
        char(')')
    )(
        pureP({
            label: title,
            link: link
        })
    )));
```