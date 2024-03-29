```javascript
// showMenuLR :: Bool -> String -> String ->
// [String] -> String -> Either String [String]
const showMenuLR = blnMult =>
    // An optionally multi-choice menu, with
    // a given title and prompt string.
    // Listing the strings in xs, with
    // the string `selected` pre-selected
    // if found in xs.
    menuTitle => prompt => selected => xs =>
    Boolean(xs.length) ? (() => {
        const sa = Object.assign(
            Application("System Events"), {
                includeStandardAdditions: true
            });

        sa.activate();

        const v = sa.chooseFromList(xs, {
            withTitle: menuTitle,
            withPrompt: prompt,
            defaultItems: xs.includes(selected) ? (
                [selected]
            ) : [xs[0]],
            okButtonName: "OK",
            cancelButtonName: "Cancel",
            multipleSelectionsAllowed: blnMult,
            emptySelectionAllowed: false
        });

        return Array.isArray(v) ? (
            Right(v)
        ) : Left(`User cancelled ${menuTitle} menu.`);
    })() : Left(`${menuTitle}: No items to choose from.`);
```