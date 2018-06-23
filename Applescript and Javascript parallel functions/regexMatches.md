```applescript
-- regexMatches :: String -> String -> [[String]]on regexMatches(strRegex, strHay)	set ca to current application	-- NSNotFound handling and and High Sierra workaround due to @sl1974	set NSNotFound to a reference to 9.22337203685477E+18 + 5807	set oRgx to ca's NSRegularExpression's regularExpressionWithPattern:strRegex ¬		options:((ca's NSRegularExpressionAnchorsMatchLines as integer)) ¬		|error|:(missing value)	set oString to ca's NSString's stringWithString:strHay		script		on |λ|(m)			script				on |λ|(i)					tell (m's rangeAtIndex:i)						set intFrom to its location						if NSNotFound ≠ intFrom then							text (intFrom + 1) thru (intFrom + (its |length|)) of strHay						else							missing value						end if					end tell				end |λ|			end script			map(result, ¬				enumFromToInt(0, ((numberOfRanges of m) as integer) - 1))		end |λ|	end script		map(result, (oRgx's matchesInString:oString ¬		options:0 range:{location:0, |length|:oString's |length|()}) as list)end regexMatches
```

```js
// regexMatches :: String -> String -> [[String]]
const regexMatches = (strRgx, strHay) => {
    const rgx = new RegExp(strRgx, 'g');
    let m = rgx.exec(strHay),
        xs = [];
    while (m)(xs.push(m), m = rgx.exec(strHay));
    return xs;
};
```