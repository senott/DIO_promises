/*
Status Promises:
    - pending
    - fulfilled
    - 
*/
const fs = require(`fs`)
const path = require(`path`)
const basePath = `./assets`
const { promisify } = require(`util`)
const readFileAsync = promisify(fs.readFile)

console.log(`Begin`)

readFileAsync(path.resolve(basePath, `theTiger.txt`), { encoding: `utf-8` })
    .then(console.log)
    .catch(console.error)

console.log(`End`)

/*
function readFileAsync(path, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if (err) reject(err)
            return resolve(data)
        })
    })
}

console.log(`Begin`)

readFileAsync(path.resolve(basePath, `part1.txt`), { encoding: `utf-8` })
    .then(console.log)
    .catch(console.error)

console.log(`End`)
*/

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`End`), 2000)
})

console.log(`Begin`)

//promise.then((data) => console.log(data))
promise.then(console.log)
*/