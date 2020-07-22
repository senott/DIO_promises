const fs = require(`fs`)
const path = require(`path`)
const basePath = `./assets`
const { promisify } = require(`util`)
const readFileAsync = promisify(fs.readFile)

function read(index) {
    return readFileAsync(path.resolve(basePath, `part${index}.txt`), { encoding: `utf-8` })
}

console.log(`Begin`)

const promiseArray = []

for (let i = 1; i <= 4; i++) {
    promiseArray[i-1] = read(i)
}

Promise.all(promiseArray).then((arr) => console.log(arr.join(`\n`)))