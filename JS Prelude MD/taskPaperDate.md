```js
// taskPaperDate :: Date -> String
const taskPaperDate = dte => {
    const [d, t] = iso8601Local(new Date()).split('T');
    return [d, t.slice(0, 5)].join(' ');
};
```