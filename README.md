# prelude-jxa
Generic functions for:

- **macOS** scripting with JavaScript for Automation
- **iOS** scripting with apps like the excellent [1Writer](http://1writerapp.com/), and @agiletortoise's Drafts.

## Details:

- Function names are as in [Hoogle](https://www.haskell.org/hoogle/?hoogle=concatMap).
- The 300+ functions in [jsPrelude.js](https://github.com/RobTrew/prelude-jxa/blob/master/jsPrelude.js) are generic and cross-platform (macOS, iOS etc),
- The 20+ functions in [jxaSystemIO.js](https://github.com/RobTrew/prelude-jxa/blob/master/jxaSystemIO.js) are specific to macOS.

For the purposes of sketching and testing  a script,  
the JavaScriptCore interpreter used on macOS and iOS is fast enough
to allow for import of the whole of the [jsPrelude.js](https://github.com/RobTrew/prelude-jxa/blob/master/jsPrelude.js) file and,
in the case of macOS, the [jxaSystemIO.js](https://github.com/RobTrew/prelude-jxa/blob/master/jxaSystemIO.js) file as well.

(c. 380 generic and file-system functions in total)

Example of a JavaScript for Automation script which uses imported library
file(s):

(see the usingLibs function called at the end)

```javascript
(() => {
    'use strict';

    // Example of using an import of the whole jsPrelude.js library:

    // Generating 350+ files containing comparisons of JS and AS versions
    // of the same function.

    // main :: IO ()
    const main = () => {
        const
            fpJXAFolder = '~/prelude-jxa/JS Prelude MD/',
            fpASFolder = '~/prelude-applescript/AS Prelude MD/',
            fpParallelFolder = '~/preludes/parallel/',

            // Returning an 'Either' type:
            //   a dictionary with a Left key for any error message,
            //   or a Right key for a successfully computed value or result.
            lrResult = bindLR(
                createDirectoryIfMissingLR(true, fpParallelFolder),
                fpOut => doesDirectoryExist(fpJXAFolder) ? (
                    doesDirectoryExist(fpASFolder) ? (() => {
                        const
                            jxaFunctions = getDirectoryContents(
                                fpJXAFolder
                            ),
                            gaps = foldl(
                                (a, fpMD) => {
                                    showLog('fpMD', fpMD);
                                    const fpAS = fpASFolder + fpMD;
                                    return doesFileExist(fpAS) ? (
                                        writeFile(
                                            fpParallelFolder + fpMD,
                                            map(readFile, [
                                                fpAS,
                                                fpJXAFolder + fpMD
                                            ]).join('\n\n')
                                        ),
                                        a
                                    ) : a.concat(fpMD)
                                }, [],
                                jxaFunctions
                            );
                        return gaps.length > 0 ? (
                            Left(
                                'Missing Applescript pairs:\n' +
                                gaps.join('\n')
                            )
                        ) : Right(
                            jxaFunctions.length.toString() +
                            ' parallel function files written.'
                        )

                    })() : Left('Folder not found: ' + fpASFolder)
                ) : Left('Folder not found: ' + fpJXAFolder)
            );
        return lrResult.Left || lrResult.Right;
    };

    // LIBRARY IMPORT --------------------------------------

    // Evaluate a function f :: (() -> a)
    // in the context of the JS libraries whose source
    // filePaths are listed in fps :: [FilePath]

    // Evaluate a function f :: (() -> a)
    // in the context of the JS libraries whose source
    // filePaths are listed in fps :: [FilePath]
    // usingLibs :: [FilePath] -> (() -> a) -> a
    const usingLibs = (fps, f) =>
        fps.every(doesFileExist) ? (
            eval(`(() => {
                'use strict';
                ${fps.map(readFile).join('\n\n')}
                return (${f})();
            })();`)
        ) : 'Library not found at: ' + [].concat(...fps.map(
            fp => doesFileExist(fp) ? [] : [fp]
        )).join('\n');

    // doesFileExist :: FilePath -> IO Bool
    const doesFileExist = strPath => {
        const ref = Ref();
        return $.NSFileManager.defaultManager
            .fileExistsAtPathIsDirectory(
                $(strPath)
                .stringByStandardizingPath, ref
            ) && ref[0] !== 1;
    };

    // readFile :: FilePath -> IO String
    const readFile = strPath => {
        let error = $(),
            str = ObjC.unwrap(
                $.NSString.stringWithContentsOfFileEncodingError(
                    $(strPath)
                    .stringByStandardizingPath,
                    $.NSUTF8StringEncoding,
                    error
                )
            );
        return Boolean(error.code) ? (
            ObjC.unwrap(error.localizedDescription)
        ) : str;
    };

    // MAIN ------------------------------------------------
    return usingLibs(
        [
            '~/preludes/jsPrelude.js', // iOS and macOS
            '~/preludes/jxaSystemIO.js' // macOS only
        ],
        main
    );
})();
```
