# prelude-jxa
Generic functions for macOS scripting with JavaScript for Automation – function names as in Hoogle.

JXA is fast enough to allow for import of the whole of the jsPrelude.js and
jxaSystemIO.js files (c. 380 generic functions in total) when sketching out
and testing a script:

Example of a JXA script which uses imported library file(s) –
(see the usingLibs function towards the bottom)

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
                                    const fpAS = fpASFolder + fpMD;
                                    return doesFileExist(
                                        fpAS
                                    ) ? (
                                        writeFile(
                                            fpParallelFolder + fpMD,
                                            map(
                                                readFile, [
                                                    fpAS,
                                                    fpJXAFolder + fpMD
                                                ]
                                            ).join('\n\n')
                                        ),
                                        a
                                    ) : a.concat(fpJS)
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
            '~/preludes/jsPrelude.js',
            '~/preludes/jxaSystemIO.js'
        ],
        main
    );
})();
```
