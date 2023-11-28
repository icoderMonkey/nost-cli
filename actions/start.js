const chalk = require('chalk')
const fs = require('node:fs')
const { exec } = require('node:child_process')

const handleStart = async () => {
    const serverEntryFilePath = `${process.cwd()}/src/main.ts`
    if (!fs.existsSync(serverEntryFilePath)) {
        console.info(chalk.redBright('Please ensure that the entry file for the service exists'))
        return
    }

    const startProcess = exec('nodemon --files ./src/main.ts')


    startProcess.stdout.on('data', (data) => {
        console.log(`${data}`);
    });

    startProcess.stderr.on('data', (data) => {
        console.error(`${data}`);
    });

    startProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

}

module.exports = handleStart