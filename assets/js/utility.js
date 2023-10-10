import Finder from 'fs-finder';

export const imageCount = function() {
    let files = Finder.in('./public/Images/').findFiles();
    return files.length
}

export const makeRows = function(imgCount) {
    console.log("imgCount(): " + imgCount)
    let numRows = Math.ceil(imgCount / 3)
    console.log("numRows: " + numRows)

    const immutableArray = Array.from(Array(imgCount + 1).keys()).slice(1)
    let mutableArray = immutableArray
    console.log("immutableArray: " + immutableArray)
    console.log("mutableArray: " + mutableArray)

    for (let i = 0 + 1; i < numRows + 1; i++) {
        const placeholderArray = []
        for (let i = 0; i < 3; i++) {
            placeholderArray.push(mutableArray[i])
        }
        mutableArray = mutableArray.slice(3)
        console.log(placeholderArray)
    }

    return numRows
}