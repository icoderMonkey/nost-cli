const fs = require('node:fs')
const chalk = require('chalk')
const path = require('node:path')

const handleConfig = async (source) => {

    const configDirPath = `${process.cwd()}/src/config`

    if (!fs.existsSync(configDirPath)) {
        console.info(chalk.redBright('There is no src/config folder in the current directory.'))
    }

    const configFilePath = `${path.extname(source) === '.ts' ? `${source.split('.ts')[0]}.config.ts` : `${source}.config.ts`}`
    const configFileFullPath = `${process.cwd()}/src/config/${configFilePath}`
    const content = `// ${configFilePath}`

    if (fs.existsSync(configFileFullPath)) {
        console.info(chalk.redBright('The configuration file already exists.'))
        return
    }

    fs.writeFile(configFileFullPath, content, 'utf-8', (err) => {
        if (err) {
            console.log(err)
            return
        }

        console.log(chalk.blueBright(`${configFilePath} configuration file created successfully.`))
    })

}


module.exports = handleConfig