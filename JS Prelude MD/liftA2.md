```javascript
// f a -> f b -> f c
const liftA2 = f =>
    // Lift a binary function to actions.
    // liftA2 f a b = fmap f a <*> b
    a => b => ({
        '(a -> b)': () => liftA2Fn,
        'Either': () => liftA2LR,
        'Maybe': () => liftA2May,
        'Tuple': () => liftA2Tuple,
        'Node': () => liftA2Tree,
        'List': () => liftA2List,
        'Bottom': () => liftA2List
    } [typeName(a) || 'List']())(f)(a)(b);
```