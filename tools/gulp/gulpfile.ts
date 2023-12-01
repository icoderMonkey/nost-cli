import { task, series, src } from 'gulp'
import * as clean from 'gulp-clean'

const sources = ['bin', 'acc']

const cleanOutput = () => {
  const files = sources.map((source) => [
    `${source}/**/*.js`,
    `${source}/**/*.d.ts`,
  ])

  return src(
    files.reduce((pre, cur) => pre.concat(cur), []),
    {
      read: false,
    },
  ).pipe(clean())
}

task('clean:output', cleanOutput)
task('clean', series('clean:output'))
