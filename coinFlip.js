const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve(`Yay`) : reject(`Oops`))

// coinFlip
//     .then((data) => console.log(data, `1`))
//     .then(() => console.log(`End1`))
//     .catch((err) => console.log(`Erro 1`))

// coinFlip
// .then((data) => console.log(data, `1`))
// .catch((err) => console.log(`Erro 1`))
// .then(() => console.log(`End1`))

// coinFlip.then((data) => console.log(data))
// coinFlip.catch((err) => console.error(`Next then will not execute`))
// coinFlip.then(() => console.log(`End 2`))

console.log(`Begin`)

// coinFlip.then((data) => console.log(data))
//     .catch((err) => { throw err })
//     .then(() => console.log(`End1`))

// coinFlip.then((data) => console.log(data))
//      .catch(console.error)
//      .then(() => console.log(`End1`))

// new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log(`Yay`))

coinFlip
    .then((data) => console.log(`Yay 1`))
    .then(() => console.log(`Result`))
    .then(() => console.log(`End 1`))

coinFlip
    .catch(() => { throw new Error(`First catch`) })
    .catch(() => console.error(`Error in first case, next time will not execute`))