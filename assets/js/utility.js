import Finder from 'fs-finder';

export const imageCount = function() {
    let files = Finder.in('./public/Images/').findFiles();
    return files.length
}

export const makeRows = function(imgCount) {
    console.log("imgCount(): " + imgCount)
    let numRows = Math.ceil(imgCount / 3)
    console.log("numRows: " + numRows)
    return numRows
}