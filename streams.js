// Streams - Useful for continuous data or big files
const { writeFileSync } = require('fs');
for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big-file.txt', `hello world ${i}\n`, { flag: 'a' });
}

const { createReadStream } = require('fs');

// highWaterMark - control size of data chunk, default 64kb
const stream = createReadStream('./content/big-file.txt', { highWaterMark: 90000 });

stream.on('data', (result) => {
    console.log(result);
}
);
stream.on('error', (err) => {
    console.log(err);
}
);

