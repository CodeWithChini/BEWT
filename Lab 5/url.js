const url = require('url');

const urlObj = new URL("https://www.info.com/path/to/resource?name=HillKalola&age=30");

console.log(`Protocol : ${urlObj.protocol}`);
console.log(`HostName : ${urlObj.hostname}`);
console.log(`pathName : ${urlObj.pathname}`);

urlObj.searchParams.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
