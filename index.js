// #!/usr/bin/env node

const { program } = require('commander')
const { version } = require('./package.json')
const handleInfo = require('./actions/info')
const handleInit = require('./actions/init')
const handleStart = require('./actions/start')
const handleBuild = require('./actions/build')
const handleConfig = require('./actions/config')
const handleController = require('./actions/controller')
const handleErrorTypes = require('./actions/errorTypes')
const handleMiddleware = require('./actions/middleware')
const handleRouter = require('./actions/router')
const handleService = require('./actions/service')



program.version(version, '-v, --version', 'Output the current version.')
program.option('-h, --help', 'Output usage information.')

program
  .command('init <project-name>')
  .alias('i')
  .description('Initialization Nost application.')
  .action(handleInit)

program
  .command('start')
  .description('Run Nost application.')
  .action(handleStart)

program
  .command('build')
  .alias('b')
  .description('Build Nost application.')
  .action(handleBuild)

program
  .command('info')
  .description('Display Nost project details.')
  .action(handleInfo)

program
  .command('config <config-filename>')
  .alias('cfg')
  .description('Generate a configuration file.')
  .action(handleConfig)

program
  .command('controller <controller-filename>')
  .alias('c')
  .description('Generate a controller declaration.')
  .action(handleController)

program
  .command('error <error-types-filename>')
  .alias('e')
  .description('Generate a error declaration.')
  .action(handleErrorTypes)

program
  .command('middleware <middleware-filename>')
  .alias('m')
  .description('Generate a middleware declaration.')
  .action(handleMiddleware)

program
  .command('router <router-filename>')
  .alias('r')
  .description('Generate a router declaration.')
  .action(handleRouter)

program
  .command('service <service-filename>')
  .alias('s')
  .description('Generate a service declaration.')
  .action(handleService)

program.parseAsync(process.argv)