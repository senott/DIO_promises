const fs = require(`fs`)
const path = require(`path`)
const basePath = `./assets`
const { promisify } = require(`util`)
const readFileAsync = promisify(fs.readFile)

console.log(`Begin`)

function read(index) {
    return readFileAsync(path.resolve(basePath, `part${index}.txt`), { encoding: `utf-8` })
}

function start(index, max) {
    if (index > max) return
    read(index).then((data) => {
        console.log(data, `\n`)
        start(++index, max)
    })
}

start(1, 4)

// --> Finally
// readFileAsync(path.resolve(basePath, `theTiger.txt`), { encoding: `utf-8` })
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => console.log(`End`))

// --> Promise Hell
// readFileAsync(path.resolve(basePath, `part1.txt`), { encoding: `utf-8` })
//     .then((sentence) => {
//         console.log(sentence, `\n`)
//         return readFileAsync(path.resolve(basePath, `part2.txt`), { encoding: `utf-8` })
//     })
//     .then((sentence) => {
//         console.log(sentence, `\n`)
//         return readFileAsync(path.resolve(basePath, `part3.txt`), { encoding: `utf-8` })
//     })
//     .then((sentence) => {
//         console.log(sentence, `\n`)
//         return readFileAsync(path.resolve(basePath, `part4.txt`), { encoding: `utf-8` })
//     })
//     .then(console.log)
//     .finally(() => console.log(`End`))
