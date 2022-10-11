# Wanchain Web3 Domains

Nodejs SDK

Npm: https://www.npmjs.com/package/domainchainjs

Before installing the package you need to check and be sure to install the packages below:

```
npm install web3 
```

Install Package

```
npm install domainchainjs
```

Call 
```
const domainchainjs = require('domainchainjs');
```

Install:

```
const wanchain = 
{
	"rpcUrl": "https://gwan-ssl.wandevs.org:56891",
	"contractAddress": "0xf849d8227b05d9c603e703989b448b2e51f7c3cd"		
}
const sdk = domainjs.SDK('custom', wanchain); 

// your domains
const _domain = "wanchain.wan";
	
// resolve domain to get the address of the owner.
const owner = await sdk.getOwner(_domain);

console.log(owner);

// your address
const _address = "0x5aEa3F3f358347Abf94B554389174F966faeEfbB";

// get a domain default from a user's address, requiring the user to set the default domain name initially.
const domain = await sdk.getDomain(_address);

console.log(domain);
```
Pls update test.js for specific instructions

Thanks!



