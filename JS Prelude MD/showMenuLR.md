```javascript
// showMenuLR :: Bool -> String -> String ->
// [String] -> String -> Either String [String]
const showMenuLR = blnMult =>
    // An optionally multi-choice menu, with
    // a given title and prompt string.
    // Listing the strings in xs, with
    // the the string `selected` pre-selected
    // if found in xs.
    title => prompt => xs =>
    selected => 0 < xs.length ? (() => {
        const sa = Object.assign(
            Application("System Events"), {
                includeStandardAdditions: true
            });

        sa.activate();

        const v = sa.chooseFromList(xs, {
            withTitle: title,
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
        ) : Left(`User cancelled ${title} menu.`);
    })() : Left(`${title}: No items to choose from.`);
```