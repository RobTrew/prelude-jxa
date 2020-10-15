```js
// token :: Parser a -> Parser a
const token = p => {
    // A new parser for a space-wrapped 
    // instance of p. Any flanking 
    // white space is discarded.
    const space = whiteSpace();
    return between(space)(space)(p);
};
```