import {Command, Flags} from '@oclif/core'

export default class Real extends Command {
  static description = 'PXE start with real-dhcp'

  static examples = [
    `$ sudo cuckoo real
start a PXE server with real-dhcp (capable to boot UEFI machines bit can generate problems if a a real dhcp server exostss)
`,
  ]

  static flags = {
    from: Flags.string({char: 'f', description: 'Who is saying hello', required: true}),
  }

  static args = [{name: 'person', description: 'Person to say hello to', required: true}]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Real)

    this.log(`proxy ${args.person} from ${flags.from}! (./src/commands/proxy.ts)`)
  }
}
