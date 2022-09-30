/**
 * penguins-cuckoo
 */

const dhcpd = require('./dhcpd/dhcpd')
const tftp = require( 'tftp')

import network from './classes/network'
import http, { IncomingMessage, ServerResponse } from 'http'
import nodeStatic from 'node-static'

/**
 * Configurazione
 */
const n = new network()
let pxeRoot = '/home/eggs/pxe/'

/**
 * dhcp-proxy
 */
let options = {
	subnet: n.cidr,

	// your server running this dhcproxy
	host: n.address,

	// your TFTP server
	tftpserver: n.address,

	// TFTP boot filenames
	bios_filename: 'lpxelinux.0',
	efi32_filename: 'ipxe32.efi',
	efi64_filename: 'ipxe.efi'

}
let server = new dhcpd(options)



/**
 * http
 */
const port = 80

var file = new (nodeStatic.Server)(pxeRoot)
http.createServer(function (req: IncomingMessage, res: ServerResponse) {
	file.serve(req, res)
}).listen(port)


/**
 * 
 */
let tftpOptions = {
	"host": n.address,
	"port": 69,
	"root": pxeRoot,
	"denyPUT": true
}
let tftpServer = tftp.createServer(tftpOptions)


tftpServer.on("error", function (error :any){
	//Errors from the main socket 
	//The current transfers are not aborted 

	//console.error (error)
})
 
tftpServer.on("request", function (req: any, res: any){
	req.on ("error", function (error :any){
		//Error from the request 
		//The connection is already closed 
		// console.error ("[" + req.stats.remoteAddress + ":" + req.stats.remotePort +	"] (" + req.file + ") " + error.message);
	})
})

tftpServer.listen()
