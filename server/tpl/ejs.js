module.exports = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" >
    <meta name="viewport" content="device-width, initial-scale=1">
    <title>Koa Server HTML</title>
    <link href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" >
    <script src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.js"></script>
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-8" >
          <h1>Hi <%= you %></h1>
          <p>It is <%= me %></p>
        </div>
        <div class="col-md-4">
          <p>ejs HTML</p>
        </div>
      </div>
    </div>
  </body>
</html>
`