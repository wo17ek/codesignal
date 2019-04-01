/* Medium
	An IP address is a numerical label assigned to each device 
	(e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. 
	There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
	Given a string, find out if it satisfies the IPv4 address naming rules.
*/

function isIPv4Address(inputString) {
    return /^([0-9]{1}|[0-9]{2}|(1[0-9]{2}|2[0-9]{1}[0-5]{1}))\.([0-9]{1}|[0-9]{2}|(1[0-9]{2}|2[0-9]{1}[0-5]{1}))\.([0-9]{1}|[0-9]{2}|(1[0-9]{2}|2[0-9]{1}[0-5]{1}))\.([0-9]{1}|[0-9]{2}|(1[0-9]{2}|2[0-9]{1}[0-5]{1}))$/.test(inputString);
}

