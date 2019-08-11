```applescript
-- runAction :: Action a -> a
on runAction(act)
    -- Evaluation of an action.
    tell act to |λ|(its arg) of my mReturn(its act)
end runAction
```

```js
// runAction :: Action a -> a
const runAction = act =>
    // Evaluation of an action.
    act['act'](act['arg']);
```