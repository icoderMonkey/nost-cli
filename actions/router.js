const fs = require('node:fs')
const chalk = require('chalk')
const path = require('node:path')

const handleRouter = async (source) => {

  const routerDirPath = `${process.cwd()}/src/router`

  if (!fs.existsSync(routerDirPath)) {
    console.info(chalk.redBright('There is no src/router folder in the current directory.'))
  }

  const routerFilePath = `${path.extname(source) === '.ts' ? `${source.split('.ts')[0]}.router.ts` : `${source}.router.ts`}`
  const routerFileFullPath = `${process.cwd()}/src/router/${routerFilePath}`
  const content = `
// ${routerFilePath}
import Router from '@koa/router'

const router = new Router({ prefix: '/${source}' })

router.get('/list')

router.post('/list/:id')

export default router
`

  if (fs.existsSync(routerFileFullPath)) {
    console.info(chalk.redBright('The router file already exists.'))
    return
  }

  fs.writeFile(routerFileFullPath, content.trim(), 'utf-8', (err) => {
    if (err) {
      console.log(err)
      return
    }

    console.log(chalk.blueBright(`${routerFilePath} created successfully.`))
  })

}


module.exports = handleRouter