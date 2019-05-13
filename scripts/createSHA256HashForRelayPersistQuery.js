const fs = require('fs-extra');
const crypto = require('crypto');


const inputPath = __dirname + '/../persisted-queries.json';
const outputPath = __dirname + '/../src/persisted-queries.json';

const inputJson = fs.readJsonSync(inputPath);

const outputJson = {};
Object.entries(inputJson).map(([key, value]) => {
    outputJson[key] = {
        sha256: crypto.createHash('sha256').update(value).digest("hex"),
        query: value,
    };
});
fs.writeJsonSync(outputPath, outputJson);
fs.removeSync(inputPath);
