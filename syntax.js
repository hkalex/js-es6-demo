readFile('filename', function(content) { return content + "abc"; })

readFile('filename', (content) => content + "abc");

readFile('fileA', function(fileAContent) {
  readFile('fileB', function(fileBContent) {
    readFile('fileC', function(fileCContent) {
      readFile('fileD', function(fileDContent) {
        30 layers!!!!
      })
    })
  })
})


readFile('fileA').then((fileAContent) => {
  return readFile('fileB');
}).then((fileBContent) => {
  return readFile('fileC');
}).then((fileCContent) => {
  return readFile('fileD');
}).then((fileDContent) => {

}).catch(function(err) {
  // error handling
})

try {
  var fileAContent = await readFile('fileA');
  var fileBContent = await readFile('fileB');
  var fileCContent = await readFile('fileC');
  var fileDContent = await readFile('fileD');
} catch (ex) {
  // error handling
}
