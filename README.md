# DHCP Proxy for FOG Project

FOG users mostly rely on dnsmasq to provide PXE boot information to the clients if they cannot change DHCP settings in their network environment. Unfortunately dnsmasq is not capable to serve BIOS as well as (U)EFI machines yet. Therefore you can try using this node-dhcproxy to suit your needs.

## Usage
* Install node.js on Linux or Windows
* Checkout https://github.com/FOGProject/node-dhcproxy.git
* Change dhcproxy.js to suit your environment, e.g.:

```js
    subnet: '192.168.1.0/24',
    // your server running this dhcproxy
    host: '192.168.1.254',
    // your TFTP server
    tftpserver: '192.168.1.200',
```

* Install dependencies using 'npm install'
* Start 'node dhcproxy.js'

## Reference
penguins-cuckoo started on 29 september 2022 from:
* https://github.com/FOGProject/node-dhcproxy (the only working at that time)
* 
