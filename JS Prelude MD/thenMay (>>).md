```javascript
// thenMay (>>) :: Maybe a -> Maybe b -> Maybe b
const thenMay = mbx => mby =>
    mbx.Nothing ? mbx : mby;
```