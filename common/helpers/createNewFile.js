const fs          = require('fs');
const makeFolders = require('./makeFolders')

const createNewFile = ( dir, filename, txt ) => {
  makeFolders(dir)
  
  let ext   = filename.includes('.') ? '' : '.js'
  let wfile = `${dir}/${filename}${ext}`

  fs.writeFile(wfile, txt, function (err) {
      if (err) return console.log(err)
  })

}

module.exports = createNewFile;