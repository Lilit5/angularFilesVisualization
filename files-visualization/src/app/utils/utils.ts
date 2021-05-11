export class Utils {
    /**
     * Function parses file paths: determining types. Whether there are files or folders
     * @param pathsArray
     * @returns array of parsed files with name and extention
     */
    parseFilePaths(pathsArray: Array<Object>) {
        const filesParsed = pathsArray.map((el: Object) => {
            const fileName = (el["path"]).replace(/^.*(\\|\/|\:)/, '');
            const details = {
                name: fileName.split('.')[0],
                ext: fileName.split('.')[1],
            };
            return {...el, details };
        })
        return filesParsed;
    }
}