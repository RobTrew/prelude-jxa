```js
// Action :: (a -> b) -> a -> Action b
const Action = f =>
    // Constructor for an action.
    x => ({
        type: 'Action',
        act: f,
        arg: x
    });
```