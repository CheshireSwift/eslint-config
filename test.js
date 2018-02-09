import test from 'ava'
import { CLIEngine } from 'eslint'

import config from './index'

const passesOn = (t, ...files) => {
  const { errorCount, warningCount } = t.context.cli.executeOnFiles(files)
  t.is(errorCount, 0)
  t.is(warningCount, 0)
}

const failsOn = (t, file, rule, pattern) => {
  const results = t.context.cli.executeOnFiles([file])
  const { ruleId, source } = results.results[0].messages[0]
  t.is(results.results.length, 1)
  t.regex(ruleId, rule)
  t.regex(source, pattern)
}

test.beforeEach(t => { t.context.cli = new CLIEngine(config) })

test('passes on itself', passesOn, 'index.js')

test('vars must be used',
  failsOn, 'samples/unused-vars.js',
  /unused-vars/, /function blah/)

test('spaces inside braces',
  failsOn, 'samples/spaces-in-braces.js',
  /object-curly/, /{ a: 1, b: 2}/)

test('end commas',
  failsOn, 'samples/end-commas.js',
  /comma/, /b: 2/)
