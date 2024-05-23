```javascript
// alert :: String => String -> IO String
const alert = title =>
    // Display of a given title and message.
    s => {
        const sa = Object.assign(
            Application("System Events"), {
                includeStandardAdditions: true
            });

        return (
            sa.activate(),
            sa.displayDialog(s, {
                withTitle: title,
                buttons: ["OK"],
                defaultButton: "OK"
            }),
            s
        );
    };
```