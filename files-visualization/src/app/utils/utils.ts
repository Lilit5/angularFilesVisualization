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
            return { ...el, details };
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
        const pathsSplited: Array<Array<any>> = pathsArray.map((el: Object) => {
            //    return  {...el, path: el["path"].split('/')};
            return el["path"].split('/');
        });
        console.log("pathsSplited ------------ ", pathsSplited);
        const folderNames = [... new Set([].concat(...pathsSplited).filter(el => !el.includes('.')))];
        console.log("folderNames --------------- ", folderNames);
        const foldersWithContents = folderNames.map(folder => {
            return { [folder]: [...new Set(pathsSplited.filter(el => el.includes(folder)).map(el => el[el.indexOf(folder) + 1]))].filter(el => el) };
        })
        console.log("foldersWithContents ----------- ", foldersWithContents);


        return foldersWithContents;
    }

    /**
     * Function finds the root folder
     * 
     * @param data array where root should be found
     * @returns root folder name
     */
    getRootDir(data: Array<Object>) {
        let treeRoot = '';
        for (let i = 0; i < data.length; i++) {
            if (data[i]['type'] === 'folder' && !data[i]['path'].includes('/')) {
                treeRoot = data[i]['path'];
            }
            return treeRoot;
        }
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

    /**
     * Function gets detailes for each file in given array
     * 
     * @param pathsArray array where details should be found
     */
    getDetailesForEarchFile(pathsArray: Array<Object>) {
        const detailedList = {};
        let currentName: string;
        for (let el of pathsArray) {
            currentName = el["path"].split('/');
            currentName = currentName[currentName.length - 1];

            detailedList[currentName] = el;
        }
        console.log("detailedList --------- ", detailedList);
        return detailedList;
    }

    getSearchResults(detailedList: Object, searchable: string) {
        const matchedItems = Object.keys(detailedList).filter(el => el.includes(searchable));
        console.log("matchedItems ", matchedItems);
        return matchedItems.map(el => detailedList[el]);
    }
}