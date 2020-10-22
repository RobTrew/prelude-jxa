```js
// repeat :: a -> Generator [a]
function* repeat(x) {
    while(true) yield x;
}
```