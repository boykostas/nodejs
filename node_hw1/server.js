const http = require("http");
const url = require("url");

// Счетчики просмотров для каждой страницы
let homeViewCount = 0;
let aboutViewCount = 0;

// Функция для обработки запросов
const requestHandler = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === "/") {
    homeViewCount++;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <html>
          <head><title>Home</title></head>
          <body>
              <h1>Home Page</h1>
              <p>Views: ${homeViewCount}</p>
              <a href="/about">Go to About</a>
          </body>
      </html>
  `);
    res.end();
  } else if (pathname === "/about") {
    aboutViewCount++;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <html>
          <head><title>About</title></head>
          <body>
              <h1>About Page</h1>
              <p>Views: ${aboutViewCount}</p>
              <a href="/">Go to Home</a>
          </body>
      </html>
  `);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(`
      <html>
          <head><title>404 Not Found</title></head>
          <body>
              <h1>404 Not Found</h1>
              <p>The page you are looking for does not exist.</p>
              <a href="/">Go to Home</a>
          </body>
      </html>
  `);
    res.end();
  }
};

// Создаем HTTP сервер
const server = http.createServer(requestHandler);

// Запускаем сервер на порту 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
