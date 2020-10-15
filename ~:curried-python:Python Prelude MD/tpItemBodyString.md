```js
// tpItemBodyString :: [(String, String)] -> String
const tpItemBodyString = tuples =>
    // The full string of a TaskPaper item 
    // (except its indent), reconstructed from
    // a list of (k, v) tuples, where k is an 
    // empty string in the case of non-tag tokens.
    unwords(tuples.map(tpTextFromTuple));
```