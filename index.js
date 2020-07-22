/*
Código Assíncrono:
    - Requests HTTP
    - Leitura de arquivos
    - Acesso a serviços externos
    - I/O
*/
const fs = require(`fs`)
const path = require(`path`)
const basePath = `./assets`

console.log(`Begin`)


// const files = fs.readdirSync(path.resolve(basePath))

// const sentences = files.filter((file) => /part[1-4].txt/gi.test(file))

// for (const sentence of sentences) {
//     const text = fs.readFileSync(path.resolve(basePath, sentence)).toString()
//     console.log(text)
// }
// for (const sentence of sentences) {
//     fs.readFile(path.resolve(basePath, sentence), { encoding: `utf-8` }, cb())
// }

//  fs.readFile(path.resolve(basePath, `part1.txt`), { encoding: `utf-8` }, cb())

start(1, 4)

function cb(err, data, index, max) {
    if (err)
        throw err
    console.log(data)
    return start(++index, max)
}

function start(index, max) {
    if (index > max) return console.log(`End`)
    fs.readFile(path.resolve(basePath, `part${index}.txt`), 
    { encoding: `utf-8` },
    (err, data) => cb(err, data, index, max)
    )
}
