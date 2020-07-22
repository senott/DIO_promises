const coinFlip = new Promise(
    (resolve, reject) => setTimeout(() => Math.random() > 0.5 ? resolve(`Yay`) : reject(`Oops`), 2000)
)

const p = Promise.resolve(`resolve`).then(coinFlip)

p.then(console.log).catch(() => console.log(`error`))