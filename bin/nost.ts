#!/usr/bin/env node

import { program } from 'commander'

const bootstrap = async () => {
  program.version(
    require('../package.json').version,
    '-v, --version',
    'Output the current version.',
  )
  program.option('-h, --help', 'Output usage information.')

  program
    .command('init <project-name>')
    .alias('i')
    .description('Initialization Nost application.')

  await program.parseAsync(process.argv)
}

bootstrap()
