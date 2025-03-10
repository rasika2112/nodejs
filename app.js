// 1. Hello World
// const amount = 12;

// if(amount < 10) {
//     console.log('small number');
// } else {
//     console.log('large number');
// }

// console.log(`hey it's my first node app!!!`);


// 2. Importing modules, built-in - os, path, fs, http
// const name = require('./exportName');
// console.log(name);

// 3. os Module

// 4. path Module

// 5. fs Module
// const { readFileSync, writeFileSync } = require('fs');
// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');
// console.log(first, second);
// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' });

// 6. http Module
// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log('request Event');
//     if(req.url === '/') {
//         res.end('Welcome to our home page');
//     }
//     if(req.url === '/about') {
//         for(let i = 0; i < 1000; i++) {
//             for(let j = 0; j < 1000; j++) {
//                 console.log(`${i} ${j}`);
//             }
//         }
//         res.end('Here is our short history');
//     }
// });
// // listen is aynschronous
// server.listen(5000, () => {
//     console.log('server is listening on port 5000...');
// });

// 7. Setup Promises
// const { readFile, writeFile } = require('fs');
const { readFile, writeFile } = require('fs').promises; //returns readFilePromis and writeFilePromise
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// readFilePromise implementation
// const getText = (path) => {
//     return new Promise((resolve, reject) => {  
//         readFile(path, 'utf8', (err, data) => {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     }
// )}

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result.txt', `Here is the result: ${first}, ${second}`);
    } catch (error) {
        console.log(error);
    }
}

start();