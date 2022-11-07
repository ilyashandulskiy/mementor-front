// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('http'); // or 'https' for https:// URLs
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const file = fs.createWriteStream('src/swagger/swagger.json');
http.get(process.env.REACT_APP_SWAGGER_DOC, function (response) {
  response.pipe(file);
  file.on('finish', file.close);
});
