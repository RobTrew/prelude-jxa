```js
// break :: (a -> Bool) -> [a] -> ([a], [a])
const break_ = p => xs => {
  for (var i = 0, lng = xs.length; (i < lng) && !p(xs[i]); i++) {};
  return Tuple(xs.slice(0, i))(
    xs.slice(i)
  );
};
```