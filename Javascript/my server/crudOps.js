const { log } = require('console');
const http = require('http');
const { parse } = require('path');
const url = require('url');

let carsOwned = [
    {id: 1, carName: "Bmw m4"},
    {id: 2, carName: "Audi a4"}
];

const server = http.createServer((req, res) => {
    const method = req.method;
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    log(`Request method: ${method}, Request path: ${pathname}`);

    if (method === 'GET' && pathname === '/read') {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(carsOwned));
    } 
    else if (method === 'POST' && pathname === '/create') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            let newData = JSON.parse(body);
            carsOwned.push(newData);
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(carsOwned));
        });
    } 
    else if (method === 'PUT' && pathname.startsWith('/update/')) {
        // Extract id from the URL
        const id = parseInt(pathname.split('/')[2], 10);
        log(`Updating car with id: ${id}`);

        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const updatedData = JSON.parse(body); // Parse the JSON body
                log(`Updated data:`, updatedData);

                // Find the car by id
                const index = carsOwned.findIndex(item => item.id === id);

                if (index !== -1) {
                    // Merge the existing car data with the updated data
                    carsOwned[index] = { ...carsOwned[index], ...updatedData };

                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(carsOwned[index]));
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Data not found' }));
                }
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid JSON data' }));
            }
        });
    }
    else if(method === 'DELETE' && pathname.startsWith('/delete/')){
        const id = parseInt(pathname.split('/')[2], 10);
        let index = carsOwned.findIndex(item=>item.id === id)
        if(index !== -1){
            carsOwned.splice(index,1)
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(carsOwned));
        }else{
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data not found' }));
        }
    }
});

server.listen(8900, () => {
    console.log('Server running at http://localhost:8900');
});
