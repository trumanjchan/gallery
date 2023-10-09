import Finder from 'fs-finder';

export const imageCount = function() {
    var files = Finder.in('./public/Images/').findFiles();
    return files.length
}