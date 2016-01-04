#!/usr/bin/env node
'use strict'

const program = require('commander')
const updateNotifier = require('update-notifier')
const pkg = require('./package')
const watch = require('./commands/watch')
const build = require('./commands/build')

updateNotifier({pkg}).notify()

program
	.version(pkg.version)

program
	.command('watch')
	.option('-e, --entry [webpackEntry]', 'Set webpack entry')
	.option('-p, --port [serverPort]', 'Change port of server')
	.option('--bs, --browsersync', 'Toggle browserSync')
	.option('-s, --silent', 'Do not open browser window')
	.action(watch)

program
	.command('build')
	.option('-e, --entry [webpackEntry]', 'Set webpack entry"')
	.action(build)

program.parse(process.argv)
