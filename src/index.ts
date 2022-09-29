const svr = require('./dhcpd/dhcpd')
import nodeStatic from 'node-static'
import http, { IncomingMessage, ServerResponse } from 'http'


let options = {
	subnet: '192.168.1.0/24',

	// your server running this dhcproxy
	host: '192.168.1.17',

	// your TFTP server
	tftpserver: '192.168.1.17',

	// TFTP boot filenames
	bios_filename: 'lpxelinux.0',
	efi32_filename: 'ipxe32.efi',
	efi64_filename: 'ipxe.efi'

}

let server = new svr(options)

const port = 80
const httpRoot = '/home/eggs/pxe/'

var file = new (nodeStatic.Server)(httpRoot)
http.createServer(function (req: IncomingMessage, res: ServerResponse) {
	file.serve(req, res)
}).listen(port)

