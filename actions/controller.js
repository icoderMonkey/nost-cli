const fs = require('node:fs')
const chalk = require('chalk')
const path = require('node:path')

const handleController = async (source) => {

    const controllerDirPath = `${process.cwd()}/src/controller`

    if (!fs.existsSync(controllerDirPath)) {
        console.info(chalk.redBright('There is no src/controller folder in the current directory.'))
    }

    const controllerFilePath = `${path.extname(source) === '.ts' ? `${source.split('.ts')[0]}.controller.ts` : `${source}.controller.ts`}`
    const controllerFileFullPath = `${process.cwd()}/src/controller/${controllerFilePath}`
    const content = `
// ${controllerFilePath}
import { Context, Next } from 'koa'
class ${source[0].toUpperCase()}${source.substring(1)}Controller {
  async list(ctx: Context, next: Next) {
    ctx.body = 'list'
    await next()
  }
    
  async info(ctx: Context, next: Next) {
    ctx.body = 'info'
    await next()
  }
}

const ${source}Controller = new ${source[0].toUpperCase()}${source.substring(1)}Controller()
export default ${source}Controller
`

    if (fs.existsSync(controllerFileFullPath)) {
        console.info(chalk.redBright('The controller file already exists.'))
        return
    }

    fs.writeFile(controllerFileFullPath, content.trim(), 'utf-8', (err) => {
        if (err) {
            console.log(err)
            return
        }

        console.log(chalk.blueBright(`${controllerFilePath} created successfully.`))
    })

}


module.exports = handleController