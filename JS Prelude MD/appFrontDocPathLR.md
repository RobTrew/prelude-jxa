```js
// appFrontDocPathLR :: String -> Either String String
const appFrontDocPathLR = strApp => {
    const
        procs = Application('System Events')
        .applicationProcesses.where({
            name: strApp
        });
    return bindLR(
        bindLR(
            procs.length > 0 ? (
                Right(procs.at(0).windows)
            ) : Left(
                `No '${strApp}' application process running.`
            ),
            ws => ws.length > 0 ? (
                Right(ws.at(0))
            ) : Left('No windows found for ' + strApp)
        ),
        w => Right(
            decodeURIComponent(
                w.attributes.byName('AXDocument')
                .value().slice(7)
            )
        )
    );
};
```