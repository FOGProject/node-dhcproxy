1. Install node.js on Linux or Windows

2. checkout https://github.com/FOGProject/node-dhcproxy.git

3. Change dhcproxy.js to suit your environment, e.g.:
	subnet: '192.168.1.0/24',
	// your server running this dhcproxy
	host: '192.168.1.254',
	// your TFTP server
	tftpserver: '192.168.1.200',

4. Install dependencies using 'npm install'

5. Start 'node dhcproxy.js'

	
dhcproxy is based on node-dhcpd (https://github.com/glaszig/node-dhcpd/)
by by glaszig <glaszig@gmail.com>
Formaly under the MIT licence but will be merged into the fogproject
(https://fogproject.org/) soon.
