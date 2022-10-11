const domainchainjs = require('domainchainjs');

callWanchain();

async function callWanchain(){
	const wanchain = 
	{
		"rpcUrl": "https://gwan-ssl.wandevs.org:56891",
		"contractAddress": "0xf849d8227b05d9c603e703989b448b2e51f7c3cd"		
	}
	// install
	const sdk = domainchainjs.SDK('custom', wanchain);

	// change your domains
	const _domain = "wanchain.wan";
	
	// change your address
	const _address = "0x5aEa3F3f358347Abf94B554389174F966faeEfbB";
	
	// resolve domain to get the address of the owner. metadata: true // false default return metadata along with domain information
	const owner = await sdk.getOwner(_domain, false);

	console.log(owner);


	// get total domains
	const balance = await sdk.balanceOf(_address);

	console.log(balance);

	// get a domain default from a user's address, requiring the user to set the default domain name initially.
	const domain = await sdk.getDomain(_address);

	console.log(domain);
	
	// gets all the domains owned by an wallet address.
	const domains = await sdk.getDomains(_address);

	console.log(domains);
	
}
