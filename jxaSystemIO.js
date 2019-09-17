// JXA SYSTEMIO GENERIC FUNCTIONS

// appendFile :: FilePath -> String -> IO Bool
const appendFile = strPath => txt => {
    const
        oFullPath = ObjC.wrap(strPath)
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
        ) : doesDirectoryExist(takeDirectory(ObjC.unwrap(strPath))) ? (
            writeFile(oFullPath)(txt), // Effect, and
            true // value.
        ) : false;
};

// appendFileMay :: FilePath -> String -> Maybe IO FilePath
const appendFileMay = strPath => txt => {
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

// createDirectoryIfMissingLR :: Bool -> FilePath -> 
// Either String String
const createDirectoryIfMissingLR = blnParents => dirPath => {
    const fp = filePath(dirPath);
    return doesPathExist(fp) ? (
        Right(fp)
    ) : (() => {
        const
            e = $(),
            blnOK = $.NSFileManager.defaultManager[
                'createDirectoryAtPath' +
                'WithIntermediateDirectoriesAttributesError'
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
const doesFileExist = strPath => {
    const ref = Ref();
    return $.NSFileManager.defaultManager
        .fileExistsAtPathIsDirectory(
            $(strPath)
            .stringByStandardizingPath, ref
        ) && 1 !== ref[0];
};

// doesPathExist :: FilePath -> IO Bool
const doesPathExist = strPath =>
	$.NSFileManager.defaultManager
	.fileExistsAtPath(
		$(strPath).stringByStandardizingPath
	);

// filePath :: String -> FilePath
const filePath = s =>
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

// ObjC.import('AppKit')
// fileUTI :: FilePath -> Either String String
const fileUTI = fp => {
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
    ObjC.unwrap($.NSFileManager.defaultManager.currentDirectoryPath);

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
    ) : Right(ObjC.deepUnwrap(xs))
};

// getFinderDirectory :: IO FilePath
const getFinderDirectory = () =>
    decodeURIComponent(
        Application('Finder')
        .insertionLocation()
        .url()
        .slice(7)
    );

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
    const
        e = $(),
        ns = $.NSString.stringWithContentsOfFileEncodingError(
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
    const
        e = $(),
        ns = $.NSString.stringWithContentsOfFileEncodingError(
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

// setCurrentDirectory :: String -> IO ()
const setCurrentDirectory = strPath =>
    $.NSFileManager.defaultManager
    .changeCurrentDirectoryPath(
        ObjC.wrap(strPath)
        .stringByStandardizingPath
    );

// File name template to temporary path
// Random digit sequence inserted between template base and extension
// tempFilePath :: String -> IO FilePath
const tempFilePath = template =>
  ObjC.unwrap($.NSTemporaryDirectory()) +
    takeBaseName(template) + Math.random()
    .toString()
    .substring(3) + takeExtension(template);

// unwrap :: NSObject -> a
const unwrap = ObjC.unwrap;

// wrap :: a -> NSObject
const wrap = ObjC.wrap;

// writeFile :: FilePath -> String -> IO ()
const writeFile = strPath => strText =>
    $.NSString.alloc.initWithUTF8String(strText)
    .writeToFileAtomicallyEncodingError(
        $(strPath)
        .stringByStandardizingPath, false,
        $.NSUTF8StringEncoding, null
    );

// writeFileLR :: FilePath -> Either String IO FilePath
const writeFileLR = strPath => strText => {
    const
        e = $(),
        fp = $(strPath)
        .stringByStandardizingPath;
    return $.NSString.alloc.initWithUTF8String(strText)
        .writeToFileAtomicallyEncodingError(
            fp, false,
            $.NSUTF8StringEncoding, e
        ) ? (
            Right(ObjC.unwrap(fp))
        ) : Left(ObjC.unwrap(e.localizedDescription));
};

// File name template -> string data -> IO temporary path
// writeTempFile :: String -> String -> IO FilePath
const writeTempFile = template => txt => {
    const
        strPath = ObjC.unwrap($.NSTemporaryDirectory()) +
        takeBaseName(template) + Math.random()
        .toString()
        .substring(3) + takeExtension(template);
    return (writeFile(strPath)(txt), strPath);
};