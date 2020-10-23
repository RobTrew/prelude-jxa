```applescript
-- regexMatches :: String -> String -> [[String]]on regexMatches(strRegex, strHay)	set ca to current application	-- NSNotFound handling and and High Sierra workaround due to @sl1974	set NSNotFound to a reference to 9.22337203685477E+18 + 5807	set oRgx to ca's NSRegularExpression's regularExpressionWithPattern:strRegex ¬		options:((ca's NSRegularExpressionAnchorsMatchLines as integer)) ¬		|error|:(missing value)	set oString to ca's NSString's stringWithString:strHay		script matchString		on |λ|(m)			script rangeMatched				on |λ|(i)					tell (m's rangeAtIndex:i)						set intFrom to its location						if NSNotFound ≠ intFrom then							text (intFrom + 1) thru (intFrom + (its |length|)) of strHay						else							missing value						end if					end tell				end |λ|			end script		end |λ|	end script		script asRange		on |λ|(x)			range() of x		end |λ|	end script	map(asRange, (oRgx's matchesInString:oString ¬		options:0 range:{location:0, |length|:oString's |length|()}) as list)end regexMatches
```


```javascript
// regexMatches :: Regex -> String -> [[String]]
const regexMatches = rgx =>
    // All matches for the given regular expression
    // in the supplied string s.
    s => {
        // Recompiled to ensure that any supplied 
        // regex is interpreted as global.
        const r = new RegExp(rgx, 'g');
        return unfoldr(
            m => !!m ? (
                Just(Tuple(m)(r.exec(s)))
            ) : Nothing()
        )(r.exec(s));
    };
```