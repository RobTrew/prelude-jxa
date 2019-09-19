```js
// append (++) :: [a] -> [a] -> [a]
// append (++) :: String -> String -> String
const append = xs =>
  // A list or string composed by
  // the concatenation of two others.
  ys => xs.concat(ys);
```