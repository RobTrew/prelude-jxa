```js
// repeat :: a -> Generator [a]
function* repeat(xs) {
    while(true) yield xs;
}
```