```applescript
-- print :: a -> IO ()
on print (x)
    log x
    return x
end print
```

```js
// print :: a -> IO ()
const print = x => {
    const
        c = x.constructor.name,
        s = 'object' !== typeof x ? (
            x.toString()
        ) : 'Date' !== c ? (
            JSON.stringify.apply(
                null,
                'Array' !== c ? (
                    [x, null, 2]
                ) : [x]
            )
        ) : x.toString();
    return (
        typeof document !== 'undefined' ? (
            document.writeln(s)
        ) : typeof draft !== 'undefined' ? (
            editor.setText(
                editor.getText() + '\n' + s
            )
        ) : (
            console.log(s),
            s
        )
    );
};
```