```js
// showMenuLR :: Bool -> String -> [String] -> Either String [String]
const showMenuLR = blnMult => title => xs =>
    0 < xs.length ? (() => {
        const sa = Object.assign(Application('System Events'), {
            includeStandardAdditions: true
        });
        sa.activate();
        const v = sa.chooseFromList(xs, {
            withTitle: title,
            withPrompt: 'Select' + (
                blnMult ? ' one or more of ' + xs.length.toString() : ':'
            ),
            defaultItems: xs[0],
            okButtonName: 'OK',
            cancelButtonName: 'Cancel',
            multipleSelectionsAllowed: blnMult,
            emptySelectionAllowed: false
        });
        return Array.isArray(v) ? (
            Right(v)
        ) : Left('User cancelled ' + title + ' menu.');
    })() : Left(title + ': No items to choose from.');
```