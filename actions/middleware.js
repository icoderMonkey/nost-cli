const fs = require('node:fs')
const chalk = require('chalk')
const path = require('node:path')

const handleMiddleware = async (source) => {

  const middlewareDirPath = `${process.cwd()}/src/middleware`

  if (!fs.existsSync(middlewareDirPath)) {
    console.info(chalk.redBright('There is no src/middleware folder in the current directory.'))
  }

  const middlewareFilePath = `${path.extname(source) === '.ts' ? `${source.split('.ts')[0]}.middleware.ts` : `${source}.middleware.ts`}`
  const middlewareFileFullPath = `${process.cwd()}/src/middleware/${middlewareFilePath}`
  const content = `
// ${middlewareFilePath}
import { Context, Next } from 'koa'

export const customMiddleware = async (ctx: Context, next: Next) => {
  // do something...
  console.log(ctx.request.params, ctx.request.body)
  await next()
}
`

  if (fs.existsSync(middlewareFileFullPath)) {
    console.info(chalk.redBright('The middleware file already exists.'))
    return
  }

  fs.writeFile(middlewareFileFullPath, content.trim(), 'utf-8', (err) => {
    if (err) {
      console.log(err)
      return
    }

    console.log(chalk.blueBright(`${middlewareFilePath} created successfully.`))
  })

}


module.exports = handleMiddleware