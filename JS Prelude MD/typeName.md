```javascript
// typeName :: a -> String
const typeName = v => {
    const t = typeof v;

    return "object" === t ? (
        Array.isArray(v) ? (
            "List"
        ) : "Date" === v.constructor.name ? (
            "Date"
        ) : null !== v ? (
            v.type || "Dict"
        ) : "Bottom"
    ) : {
        "boolean": "Bool",
        "date": "Date",
        "number": "Num",
        "string": "String",
        "function": "(a -> b)"
    } [t] || "Bottom";
};
```