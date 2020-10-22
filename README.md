# prelude-jxa
Generic functions for:

- **macOS** scripting with JavaScript for Automation
- **iOS** scripting in JavaScript, with apps like the excellent [1Writer](http://1writerapp.com/), and @agiletortoise's Drafts.

## Details:

- Function names are as in [Hoogle](https://www.haskell.org/hoogle/?hoogle=concatMap).
- The 400+ functions in [jsPrelude.js](https://github.com/RobTrew/prelude-jxa/blob/master/jsPrelude.js) are generic and cross-platform (macOS, iOS etc),
- The 20+ functions in [jxaSystemIO.js](https://github.com/RobTrew/prelude-jxa/blob/master/jxaSystemIO.js) are specific to macOS.

For the purposes of sketching and testing  a script,  
the JavaScriptCore interpreter used on macOS and iOS is fast enough
to allow for import of the whole of the [jsPrelude.js](https://github.com/RobTrew/prelude-jxa/blob/master/jsPrelude.js) file and,
in the case of macOS, the [jxaSystemIO.js](https://github.com/RobTrew/prelude-jxa/blob/master/jxaSystemIO.js) file as well.

(c. 500 generic and file-system functions in total)

**Display a menu of functions to copy to the clipboard**

 ![Menu of functions](./functionMenu.png)

```javascript
(() => {
    'use strict';
    
    // Display a menu of functions to select and copy.
    // Rob Trew @2020

    ObjC.import('AppKit')

    // ---------------------- MAIN ----------------------
    const main = () => {
        const inner = () => {
            const
                fpFolder = '~/prelude-jxa',
                menuJSONFile = 'jsPreludeMenu.json';
            return either(
                alert('JavaScript functions')
            )(
                // Copied to clipboard and returned.
                x => (
                    copyText(x),
                    x
                )
            )(
                bindLR(
                    readFileLR(
                        combine(fpFolder)(menuJSONFile)
                    )
                )(
                    json => bindLR(
                        jsonParseLR(json)
                    )(
                        dict => bindLR(
                            showMenuLR(true)(
                                'Functions'
                            )(Object.keys(dict))
                        )(
                            ks => Right(
                                ks.map(k => dict[k])
                                .join('\n\n\n')
                            )
                        )
                    )
                )
            )
        };

        // alert :: String => String -> IO String
        const alert = title =>
            s => {
                const sa = Object.assign(
                    Application('System Events'), {
                        includeStandardAdditions: true
                    });
                return (
                    sa.activate(),
                    sa.displayDialog(s, {
                        withTitle: title,
                        buttons: ['OK'],
                        defaultButton: 'OK'
                    }),
                    s
                );
            };

        // copyText :: String -> IO String
        const copyText = s => {
            const pb = $.NSPasteboard.generalPasteboard;
            return (
                pb.clearContents,
                pb.setStringForType(
                    $(s),
                    $.NSPasteboardTypeString
                ),
                s
            );
        };

        return inner();
    };

    // ---------------- JS PRELUDE - JXA ----------------

    // readFileLR :: FilePath -> Either String IO String
    const readFileLR = fp => {
        const
            e = $(),
            ns = $.NSString
            .stringWithContentsOfFileEncodingError(
                $(fp).stringByStandardizingPath,
                $.NSUTF8StringEncoding,
                e
            );
        return ns.isNil() ? (
            Left(ObjC.unwrap(e.localizedDescription))
        ) : Right(ObjC.unwrap(ns));
    };


    // ------------------- JS PRELUDE -------------------

    // Left :: a -> Either a b
    const Left = x => ({
        type: 'Either',
        Left: x
    });

    // Right :: b -> Either a b
    const Right = x => ({
        type: 'Either',
        Right: x
    });

    // bindLR (>>=) :: Either a -> 
    // (a -> Either b) -> Either b
    const bindLR = m =>
        mf => undefined !== m.Left ? (
            m
        ) : mf(m.Right);

    // combine (</>) :: FilePath -> FilePath -> FilePath
    const combine = fp =>
        // Two paths combined with a path separator. 
        // Just the second path if that starts 
        // with a path separator.
        fp1 => Boolean(fp) && Boolean(fp1) ? (
            '/' === fp1.slice(0, 1) ? (
                fp1
            ) : '/' === fp.slice(-1) ? (
                fp + fp1
            ) : fp + '/' + fp1
        ) : fp + fp1;

    // either :: (a -> c) -> (b -> c) -> Either a b -> c
    const either = fl =>
        // Application of the function fl to the
        // contents of any Left value in e, or
        // the application of fr to its Right value.
        fr => e => 'Either' === e.type ? (
            undefined !== e.Left ? (
                fl(e.Left)
            ) : fr(e.Right)
        ) : undefined;

    // jsonParseLR :: String -> Either String a
    const jsonParseLR = s => {
        try {
            return Right(JSON.parse(s));
        } catch (e) {
            return Left(
                `${e.message} (line:${e.line} col:${e.column})`
            );
        }
    };

    // showMenuLR :: Bool -> String -> [String] -> 
    // Either String [String]
    const showMenuLR = blnMult =>
        title => xs => 0 < xs.length ? (() => {
            const sa = Object.assign(
                Application('System Events'), {
                    includeStandardAdditions: true
                });
            sa.activate();
            const v = sa.chooseFromList(xs, {
                withTitle: title,
                withPrompt: 'Select' + (
                    blnMult ? (
                        ' one or more of ' +
                        xs.length.toString()
                    ) : ':'
                ),
                defaultItems: xs[0],
                okButtonName: 'OK',
                cancelButtonName: 'Cancel',
                multipleSelectionsAllowed: blnMult,
                emptySelectionAllowed: false
            });
            return Array.isArray(v) ? (
                Right(v)
            ) : Left('User cancelled ' + title + ' menu.');
        })() : Left(title + ': No items to choose from.');

    return main();
})();
```
