export class Utils {
    /**
     * Function parses file paths: determining types. Whether there are files or folders
     * 
     * @param pathsArray - array that should be parsed
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

    /**
     * Function determines directory names and their contents
     * 
     * @param pathsArray - array that should be parsed
     * @returns object of parsed folders, with content
     */
    parseFolderContent(pathsArray: Array<Object>) {
        const pathsSplited : Array<Object> = pathsArray.map((el: Object) => el["path"].split('/'));
        console.log("pathsSplited ------------ ", pathsSplited);
        let finalList: Object;
        // pathsSplited.forEach((path: Array<Object>) => {
        //     path.forEach((pathEl: string) => {
        //         console.log("pathEl ------- ", pathEl);
        //         if (Object.keys(finalList).includes(pathEl)) {
        //             // finalList[pathEl]
        //         } else {
        //             finalList[pathEl] = {};
        //         }
        //     })
        // })
        return finalList;
    }

    /**
     * Function returns new sorted array from given 
     * 
     * @param pathsArray - array that should be sorted
     * @param sortBy - sorting is done by this property
     * @returns new sorted array
     */
    sortContent(pathsArray: Array<Object>, sortBy: string) {
        console.log("sortBy ------------ ", sortBy);
        
        const sortedArray = pathsArray.slice();
        sortedArray.sort((el1: Object, el2: Object) => {
            return el1[sortBy] > el2[sortBy] ? 1 : -1;
        })
        console.log("sortedArray ------- ", sortedArray);
        

        return sortedArray;
    }
}