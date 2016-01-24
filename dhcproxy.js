var dhcpd = require('./lib/dhcpd');

var server = new dhcpd({
	subnet: '141.62.66.0/24',
	// your server running this dhcproxy
	host: '141.62.66.112',
	// your TFTP server
	tftpserver: '141.62.66.235',
	// TFTP boot filenames
	bios_filename: 'undionly.kpxe',
	efi32_filename: 'ipxe32.efi',
	efi64_filename: 'ipxe.efi'
});
