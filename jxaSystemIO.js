// appendFile :: FilePath -> String -> IO Bool
const appendFile = fp =>
    // The file at fp updated with a new string
    // appended to its existing contents.
    txt => {
        const
            oFullPath = ObjC.wrap(fp)
            .stringByStandardizingPath,
            ref = Ref();
        return $.NSFileManager.defaultManager
            .fileExistsAtPathIsDirectory(
                oFullPath
                .stringByStandardizingPath, ref
            ) ? (
                0 === ref[0] ? (() => {
                    const // Not a directory
                        oData = ObjC.wrap(txt)
                        .dataUsingEncoding($.NSUTF8StringEncoding),
                        h = $.NSFileHandle.fileHandleForWritingAtPath(
                            oFullPath
                        );
                    return (
                        h.seekToEndOfFile, // Effect, and
                        h.writeData(oData),
                        h.closeFile,
                        true // value.
                    );
                })() : false // Text appending to directory is undefined
            ) : doesDirectoryExist(takeDirectory(ObjC.unwrap(fp))) ? (
                writeFile(oFullPath)(txt), // Effect, and
                true // value.
            ) : false;
    };

// appendFileMay :: FilePath -> String -> Maybe IO FilePath
const appendFileMay = strPath =>
    // Just the fully-expanded file path of 
    // any file at found strPath, after it has been
    // updated by appending the given string, or 
    // Nothing if no file is found at that path,
    // or the file is found but can not be updated.
    txt => {
        const
            oFullPath = ObjC.wrap(strPath)
            .stringByStandardizingPath,
            strFullPath = ObjC.unwrap(oFullPath),
            ref = Ref();
        return $.NSFileManager.defaultManager
            .fileExistsAtPathIsDirectory(
                oFullPath
                .stringByStandardizingPath, ref
            ) ? (
                0 === ref[0] ? (() => {
                    const // Not a directory
                        oData = ObjC.wrap(txt)
                        .dataUsingEncoding($.NSUTF8StringEncoding),
                        h = $.NSFileHandle
                        .fileHandleForWritingAtPath(oFullPath);
                    return (
                        h.seekToEndOfFile, // Effect, and
                        h.writeData(oData),
                        h.closeFile, {
                            Nothing: false,
                            Just: strFullPath
                        } // value.
                    );
                })() : Nothing()
                // Text appending to directory is undefined
            ) : doesDirectoryExist(takeDirectory(strFullPath)) ? (
                writeFile(oFullPath)(txt), // Effect, and
                Just(strFullPath) // value
            ) : Nothing();
    };

// base64decode :: String -> String
const base64decode = s =>
    ObjC.unwrap(
        $.NSString.alloc.initWithDataEncoding(
            $.NSData.alloc.initWithBase64EncodedStringOptions(
                s, 0
            ),
            $.NSUTF8StringEncoding
        )
    );

// base64encode :: String -> String
const base64encode = s =>
    ObjC.unwrap(
        $.NSString.stringWithString(s)
        .dataUsingEncoding(
            $.NSUTF8StringEncoding
        ).base64EncodedStringWithOptions(0)
    );

// copyFileLR :: FilePath -> FilePath -> Either String IO ()
const copyFileLR = fpFrom =>
    fpTo => {
        const fpTargetFolder = takeDirectory(fpTo);
        return doesFileExist(fpFrom) ? (
            doesDirectoryExist(fpTargetFolder) ? (() => {
                const
                    e = $(),
                    blnCopied = ObjC.unwrap(
                        $.NSFileManager.defaultManager
                        .copyItemAtPathToPathError(
                            $(fpFrom).stringByStandardizingPath,
                            $(fpTo).stringByStandardizingPath,
                            e
                        )
                    );
                return blnCopied ? (
                    Right(fpTo)
                ) : Left(ObjC.unwrap(e.localizedDescription));

            })() : Left(
                'Target folder not found: ' + fpTargetFolder
            )
        ) : Left('Source file not found: ' + fpFrom);
    };

// createDirectoryIfMissingLR :: Bool -> FilePath -> 
// Either String FilePath
const createDirectoryIfMissingLR = blnParents =>
    dirPath => {
        const fp = filePath(dirPath);
        return doesPathExist(fp) ? (
            Right(fp)
        ) : (() => {
            const
                e = $(),
                blnOK = $.NSFileManager
                .defaultManager[
                    'createDirectoryAtPath' + (
                        'WithIntermediateDirectories'
                        ) + 'AttributesError'
                ](fp, blnParents, undefined, e);
            return blnOK ? (
                Right(fp)
            ) : Left(e.localizedDescription);
        })();
    };

// doesDirectoryExist :: FilePath -> IO Bool
const doesDirectoryExist = fp => {
    const ref = Ref();
    return $.NSFileManager.defaultManager
        .fileExistsAtPathIsDirectory(
            $(fp)
            .stringByStandardizingPath, ref
        ) && ref[0];
};

// doesFileExist :: FilePath -> IO Bool
const doesFileExist = fp => {
    const ref = Ref();
    return $.NSFileManager.defaultManager
        .fileExistsAtPathIsDirectory(
            $(fp)
            .stringByStandardizingPath, ref
        ) && 1 !== ref[0];
};

// doesPathExist :: FilePath -> IO Bool
const doesPathExist = fp =>
	$.NSFileManager.defaultManager
	.fileExistsAtPath(
		$(fp).stringByStandardizingPath
	);

// filePath :: String -> FilePath
const filePath = s =>
    // The given file path with any tilde expanded
    // to the full user directory path.
    ObjC.unwrap(ObjC.wrap(s)
        .stringByStandardizingPath);

// fileSize :: FilePath -> Either String Int
const fileSize = fp =>
    bindLR(fileStatus(fp))(
        dct => Right(ObjC.unwrap(dct.NSFileSize))
    );

// fileStatus :: FilePath -> Either String Dict
const fileStatus = fp => {
    const
        e = $(),
        dct = $.NSFileManager.defaultManager
        .attributesOfItemAtPathError(fp, e);
    return dct.isNil() ? (
        Left(ObjC.unwrap(e.localizedDescription))
    ) : Right(ObjC.deepUnwrap(dct));
};

// fileUTI :: FilePath -> Either String String
const fileUTI = fp => {
    // ObjC.import('AppKit')
    const
        e = $(),
        uti = $.NSWorkspace.sharedWorkspace
        .typeOfFileError(fp, e);
    return uti.isNil() ? (
        Left(ObjC.unwrap(e.localizedDescription))
    ) : Right(ObjC.unwrap(uti));
};

// getCurrentDirectory :: IO FilePath
const getCurrentDirectory = () =>
    ObjC.unwrap(
        $.NSFileManager.defaultManager
        .currentDirectoryPath
    );

// getDirectoryContents :: FilePath -> IO [FilePath]
const getDirectoryContents = fp =>
    ObjC.deepUnwrap(
        $.NSFileManager.defaultManager
        .contentsOfDirectoryAtPathError(
            $(fp)
            .stringByStandardizingPath, null
        )
    );

// getDirectoryContentsLR :: FilePath -> Either String IO [FilePath]
const getDirectoryContentsLR = fp => {
    const
        error = $(),
        xs = $.NSFileManager.defaultManager
        .contentsOfDirectoryAtPathError(
            $(fp).stringByStandardizingPath,
            error
        );
    return xs.isNil() ? (
        Left(ObjC.unwrap(error.localizedDescription))
    ) : Right(ObjC.deepUnwrap(xs));
};

// getHomeDirectory :: IO FilePath
const getHomeDirectory = () =>
    ObjC.unwrap($.NSHomeDirectory());

// getTemporaryDirectory :: IO FilePath
const getTemporaryDirectory = () =>
    ObjC.unwrap($.NSTemporaryDirectory());

// listDirectory :: FilePath -> [FilePath]
const listDirectory = fp =>
	ObjC.unwrap(
		$.NSFileManager.defaultManager
		.contentsOfDirectoryAtPathError(
			ObjC.wrap(fp)
			.stringByStandardizingPath,
			null
		))
	.map(ObjC.unwrap);

// modificationTime :: FilePath -> Either String Date
const modificationTime = fp =>
    bindLR(fileStatus(fp))(
       dct => Right(ObjC.unwrap(dct.NSFileModificationDate))
    );

// newUUID :: () -> IO UUID String
const newUUID = () =>
    ObjC.unwrap($.NSUUID.UUID.UUIDString);

// readFile :: FilePath -> IO String
const readFile = fp => {
    // The contents of a text file at the
    // filepath fp.
    const
        e = $(),
        ns = $.NSString
        .stringWithContentsOfFileEncodingError(
            $(fp).stringByStandardizingPath,
            $.NSUTF8StringEncoding,
            e
        );
    return ObjC.unwrap(
        ns.isNil() ? (
            e.localizedDescription
        ) : ns
    );
};

// readFileLR :: FilePath -> Either String IO String
const readFileLR = fp => {
    // Either a message or the contents of any
    // text file at the given filepath.
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

// removeFile :: FilePath -> Either String String
const removeFile = fp => {
  const error = $();
  return $.NSFileManager.defaultManager
    .removeItemAtPathError(fp, error) ? (
      Right('Removed: ' + fp)
    ) : Left(ObjC.unwrap(error.localizedDescription));
};

// renamedFile :: FilePath -> FilePath -> 
// Either String IO String
const renamedFile = fp =>
    // Either a message detailing a problem, or
    // confirmation of a filename change in the OS.
    fp1 => {
        const error = $();
        return $.NSFileManager.defaultManager
            .moveItemAtPathToPathError(fp, fp1, error) ? (
                Right('Moved to: ' + fp1)
            ) : Left(ObjC.unwrap(
                error.localizedDescription
            ));
    };

// setCurrentDirectory :: String -> IO ()
const setCurrentDirectory = strPath =>
    $.NSFileManager.defaultManager
    .changeCurrentDirectoryPath(
        ObjC.wrap(strPath)
        .stringByStandardizingPath
    );

// tempFilePath :: String -> IO FilePath
const tempFilePath = template =>
  // File name template to temporary path
  // Random digit sequence inserted between template base and extension
  ObjC.unwrap($.NSTemporaryDirectory()) +
    takeBaseName(template) + Math.random()
    .toString()
    .substring(3) + takeExtension(template);

// unwrap :: NSObject -> a
const unwrap = ObjC.unwrap;

// wrap :: a -> NSObject
const wrap = ObjC.wrap;

// writeFile :: FilePath -> String -> IO ()
const writeFile = fp => s =>
    $.NSString.alloc.initWithUTF8String(s)
    .writeToFileAtomicallyEncodingError(
        $(fp)
        .stringByStandardizingPath, false,
        $.NSUTF8StringEncoding, null
    );

// writeFileLR :: FilePath -> Either String IO FilePath
const writeFileLR = fp =>
    s => {
        const
            e = $(),
            efp = $(fp)
            .stringByStandardizingPath;
        return $.NSString.alloc.initWithUTF8String(s)
            .writeToFileAtomicallyEncodingError(
                efp, false,
                $.NSUTF8StringEncoding, e
            ) ? (
                Right(ObjC.unwrap(efp))
            ) : Left(ObjC.unwrap(e.localizedDescription));
    };

// writeTempFile :: String -> String -> IO FilePath
const writeTempFile = template =>
    // File name template -> string data -> IO temporary path
    txt => {
        const
            strPath = ObjC.unwrap($.NSTemporaryDirectory()) +
            takeBaseName(template) + Math.random()
            .toString()
            .substring(3) + takeExtension(template);
        return (writeFile(strPath)(txt), strPath);
    };
