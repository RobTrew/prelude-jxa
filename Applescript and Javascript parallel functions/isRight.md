```applescript
-- isRight :: Either a b -> Bool
on isRight(x)
    set dct to current application's ¬
        NSDictionary's dictionaryWithDictionary:x
    (dct's objectForKey:"type") as text = "Either" and ¬
        (dct's objectForKey:"Left") as list = {missing value}
end isRight
```

```js
// isRight :: Either a b -> Bool
const isRight = lr =>
  ('undefined' !== typeof lr) && 
  ('Either' === lr.type) && (undefined !== lr.Right);
```