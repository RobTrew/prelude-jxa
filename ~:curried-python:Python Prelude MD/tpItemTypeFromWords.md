```js
// tpItemTypeFromWords :: [String] -> String
const tpItemTypeFromWords = ks => {
    // // One of {'note', 'task', 'project'} as indicated
    // by the non-tag lexemes in a TaskPaper item.
    const
        lng = ks.length,
        blnWords = 0 < lng,
        blnTask = blnWords && ('-' === ks[0]);
    return blnTask ? (
        'task'
    ) : !blnTask && blnWords && (
        ks[lng - 1].endsWith(':')
    ) ? 'project' : 'note';
};
```