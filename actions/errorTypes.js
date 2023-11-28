const fs = require('node:fs')
const chalk = require('chalk')
const path = require('node:path')

const handleErrorTypes = async (source) => {

  const errorTypesDirPath = `${process.cwd()}/src/error`

  if (!fs.existsSync(errorTypesDirPath)) {
    console.info(chalk.redBright('There is no src/error folder in the current directory.'))
  }

  const errorTypesFilePath = `${path.extname(source) === '.ts' ? `${source.split('.ts')[0]}.errorTypes.ts` : `${source}.errorTypes.ts`}`
  const errorTypesFileFullPath = `${process.cwd()}/src/error/${errorTypesFilePath}`
  const content = `
// ${errorTypesFilePath}
export const ERRORTYPE = 'error message'
`

  if (fs.existsSync(errorTypesFileFullPath)) {
    console.info(chalk.redBright('The controller file already exists.'))
    return
  }


  fs.writeFile(errorTypesFileFullPath, content.trim(), 'utf-8', (err) => {
    if (err) {
      console.log(err)
      return
    }

    console.log(chalk.blueBright(`${errorTypesFilePath} created successfully.`))
  })

}


module.exports = handleErrorTypes