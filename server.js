const express = require("express");
const fs = require("node:fs");
const marked = require("marked");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const markdown = fs.readFileSync("wishlist.md", "utf-8");
  const html = marked.parse(markdown); // Use marked.parse to convert Markdown to HTML
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Wish List</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
      <style>
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0; /* Remove margin to center the entire page */
            display: flex;
            justify-content: center; /* Center horizontally */
            align-items: center; /* Center vertically */
            min-height: 100vh; /* Make sure the page fills the viewport vertically */
        }
        .container {
            max-width: 800px;
            text-align: center; /* Center-align content within the container */
        }
        h1 {
            text-align: center;
        }
        h2 {
            text-align: center;
        }
        h3 {
            text-align: center;
        }
        ul {
            list-style-type: none;
            padding: 0;
            text-align: left; /* Reset text alignment for list items */
        }
        li {
            margin: 10px 0;
        }
        a {
            text-decoration: none;
            color: #007BFF;
        }
</style>
    </head>
    <body>
      <div class="container">
        <h1>My Wish List</h1>
        <div id="wishlist">${html}</div>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
