```applescript
-- print :: a -> IO ()
on print (x)
    log x
    return x
end print
```

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