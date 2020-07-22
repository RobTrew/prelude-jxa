```js
// runAction :: Action a -> a
const runAction = act =>
    // Evaluation of an action.
    act['act'](act['arg']);
```