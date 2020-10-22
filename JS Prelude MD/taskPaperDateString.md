```javascript
// taskPaperDateString :: Date -> String
const taskPaperDateString = dte => {
    const [d, t] = iso8601Local(dte).split('T');
    return [d, t.slice(0, 5)].join(' ');
};
```