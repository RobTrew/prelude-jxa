```javascript
// takeExtension :: FilePath -> String
const takeExtension = fp => (
    fs => {
        const fn = last(fs);
        return fn.includes('.') ? (
            '.' + last(fn.split('.'))
        ) : '';
    }
)(fp.split('/'));
```