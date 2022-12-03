const http = require('http');


let requestsCount = 0

const server = http.createServer( (request, response) => {


    if (request.url === '/favicon.ico') {
        response.end()
        return




    } else {

        requestsCount++

        switch (request.url) {

        case '/students':
            response.write('kakie studenti');
            break;
        case '/courses':
            response.write('kakie kursi ')
            break;
        default:
            response.write('not found ' + requestsCount)
    }

    }
  response.write('?? ')
  response.end();
})

server.listen(3003)

