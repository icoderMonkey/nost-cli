const fs = require('node:fs')
const chalk = require('chalk')
const ora = require('ora')
const downloadGitRepo = require('download-git-repo')

const handleInit = async (source) => {

    const projectFolderPath = `${process.cwd()}/${source}`

    if (!/^[a-zA-Z_][\w_\-]+$/g.test(source)) {
        console.info(chalk.blueBright('Please enter the correct project name (for example: learn-nost).'))
        return
    }
    if (fs.existsSync(projectFolderPath)) {
        console.info(chalk.blueBright(`The ${source} folder already exists.`))
        return
    }

    console.info(chalk.blueBright(`
    ------------------------------------------
        Nost - Node Framework Based On Koa 
    ------------------------------------------
    `))

    const download = ora(chalk.bold(`Initializing ${source} project...`)).start()

    downloadGitRepo(
        'direct:https://github.com/G0ngzheng/tn.git#main',
        `${source}`,
        { clone: true },
        async (err) => {
            if (err) {
                console.log(err)
                download.fail()
                console.log(chalk.red(`Project template download failed, please check your network environment.`))
                process.exit(1)
            }
            download.succeed('Download successful!')

            const nostPackage = require(`${projectFolderPath}/package.json`)
            const combinedJson = { ...nostPackage, name: source }
            fs.writeFileSync(`${projectFolderPath}/package.json`, JSON.stringify(combinedJson, null, 2), 'utf-8')

            console.info(``)
            console.info(chalk.bold("Now you can execute the following command:"))
            console.info(``)
            console.info(chalk.green(chalk.bold(`cd ${source}`)))
            console.info(chalk.green(chalk.bold('yarn')))
            console.info(chalk.green(chalk.bold('yarn serve')))
            console.info(``)

        }
    )


}


module.exports = handleInit