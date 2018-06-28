```js
// Given a type name string, returns a 
// specialised 'pure', where
// 'pure' lifts a value into a particular functor.
```

```js
// pureT :: String -> f a -> (a -> f a)
const pureT = (t, x) =>
    'List' !== t ? (
        'Either' === t ? (
            pureLR(x)
        ) : 'Maybe' === t ? (
            pureMay(x)
        ) : 'Tree' === t ? (
            pureTree(x)
        ) : 'Tuple' === t ? (
            pureTuple(x)
        ) : pureList(x)
    ) : pureList(x);
```