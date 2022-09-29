const dhcpd = require('./lib/dhcpd')

options = {
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

server = new dhcpd(options)

