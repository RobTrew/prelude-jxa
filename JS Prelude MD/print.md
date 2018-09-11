```js
// print :: a -> IO ()
const print = x =>
    typeof document !== 'undefined' ? (
        document.writeln(x.toString())
    ) : typeof draft !== 'undefined' ? (
        editor.setText(
            editor.getText() + '\n' +
            x.toString() + '\n'
        )
    ) : (
        x
    );
```