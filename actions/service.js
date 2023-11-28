const fs = require('node:fs')
const chalk = require('chalk')
const path = require('node:path')

const handleService = async (source) => {

  const serviceDirPath = `${process.cwd()}/src/service`

  if (!fs.existsSync(serviceDirPath)) {
    console.info(chalk.redBright('There is no src/service folder in the current directory.'))
  }

  const serviceFilePath = `${path.extname(source) === '.ts' ? `${source.split('.ts')[0]}.service.ts` : `${source}.service.ts`}`
  const serviceFileFullPath = `${process.cwd()}/src/service/${serviceFilePath}`
  const content = `
// ${serviceFilePath}
// import connection from "../mysql"

class ${source[0].toUpperCase()}${source.substring(1)}Service {
  // 操作 mysql 获取数据
  // async list() {
  //     const statement = 'SELECT * FROM ${source};'
  //     const [result] = await connection.execute(statement)
  //     return result
  // }

  async list() {
    return []
  }

}

const ${source}Service = new ${source[0].toUpperCase()}${source.substring(1)}Service()

export default ${source}Service
`

  if (fs.existsSync(serviceFileFullPath)) {
    console.info(chalk.redBright('The service file already exists.'))
    return
  }

  fs.writeFile(serviceFileFullPath, content.trim(), 'utf-8', (err) => {
    if (err) {
      console.log(err)
      return
    }

    console.log(chalk.blueBright(`${serviceFilePath} created successfully.`))
  })

}


module.exports = handleService