// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('http'); // or 'https' for https:// URLs
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const file = fs.createWriteStream('src/swagger/swagger.json');
http.get('http://194.58.108.158:12102/swagger/doc.json', function (response) {
  response.pipe(file);

  // after download completed close filestream
  file.on('finish', () => {
    file.close();
  });
});
