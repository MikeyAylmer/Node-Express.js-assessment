const fs = require('fs');
const https = require('https');
const { URL } = require('url');
const readline = require('readline');

if (process.argv.length !== 3) {
    console.error('Usage: node urls.js FILENAME');
    process.exit(1);
}

const inputFileName = process.argv[2];

const rl = readline.createInterface({
    input: fs.createReadStream(inputFileName),
    output: process.stdout,
    terminal: false,
});

rl.on('line', (url) => {
    try {
        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname;
        const outputPath = `${hostname}.html`;

        const request = https.get(url, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                fs.writeFile(outputPath, data, (err) => {
                    if (err) {
                        console.error(`Error writing to ${outputPath}: ${err}`);
                    } else {
                        console.log(`Saved ${url} to ${outputPath}`);
                    }
                });
            });
        });

        request.on('error', (err) => {
            console.error(`Error requesting ${url}: ${err}`);
        });
    } catch (err) {
        console.error(`Invalid URL: ${url}`);
    }
});
