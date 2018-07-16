const fs = require('fs')
const csv = require('csvtojson')
const csvFilePath = 'customer-data.csv'

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    fs.writeFile('customer-data.json', JSON.stringify(jsonObj), function(error) {
      if(error) return console.error(error)
      console.log('Writing is done')
    })
})
