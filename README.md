oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cuckoo
$ cuckoo COMMAND
running command...
$ cuckoo (--version|-v)
cuckoo/0.0.6 linux-x64 node-v16.16.0
$ cuckoo --help [COMMAND]
USAGE
  $ cuckoo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cuckoo autocomplete [SHELL]`](#cuckoo-autocomplete-shell)
* [`cuckoo help [COMMAND]`](#cuckoo-help-command)
* [`cuckoo version`](#cuckoo-version)

## `cuckoo autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ cuckoo autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ cuckoo autocomplete

  $ cuckoo autocomplete bash

  $ cuckoo autocomplete zsh

  $ cuckoo autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.3.0/src/commands/autocomplete/index.ts)_

## `cuckoo help [COMMAND]`

Display help for cuckoo.

```
USAGE
  $ cuckoo help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cuckoo.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.14/src/commands/help.ts)_

## `cuckoo version`

```
USAGE
  $ cuckoo version [--json] [--verbose]

FLAGS
  --verbose  Show additional information about the CLI.

GLOBAL FLAGS
  --json  Format output as json.

FLAG DESCRIPTIONS
  --verbose  Show additional information about the CLI.

    Additionally shows the architecture, node version, operating system, and versions of plugins that the CLI is using.
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v1.1.2/src/commands/version.ts)_
<!-- commandsstop -->
