```javascript
// repeat :: a -> Generator [a]
const repeat = function* (x) {
    while (true) {
        yield x;
    }
};
```