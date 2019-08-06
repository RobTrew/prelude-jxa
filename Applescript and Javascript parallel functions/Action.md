```applescript
-- Action :: (a -> b) -> a -> Action b
on Action(f, x)
    -- Constructor for an action.
    {type:"Action", act:f, arg:x}
end Action
```

```js
// Action :: (a -> b) -> a -> Action b
const Action = f => x => ({
    // Constructor for an action.
    type: 'Action',
    act: f,
    arg: x
});
```