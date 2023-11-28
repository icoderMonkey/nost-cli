const chalk = require('chalk')
const fs = require('node:fs')
const { exec } = require('node:child_process')

const handleBuild = async () => {
    const rollupConfigFilePath = `${process.cwd()}/rollup.config.mjs`
    if (!fs.existsSync(rollupConfigFilePath)) {
        console.info(chalk.redBright('Please ensure that the rollup config file for the service exists'))
        return
    }

    const startProcess = exec('rollup -c ./rollup.config.mjs')


    startProcess.stdout.on('data', (data) => {
        console.log(`${data}`);
    });

    startProcess.stderr.on('data', (data) => {
        console.error(`${data}`);
    });

    startProcess.on('close', (code) => {
        if (code === 0) {
            console.log('Build Finished!!!')
        }
    });

}

module.exports = handleBuild