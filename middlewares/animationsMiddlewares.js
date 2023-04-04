function showTimeMiddleware(req, res, next) {
  const date = new Date();

  const today = date.toDateString();

  console.log(`jemand hat heute ${today} movies angefragt`);

  next();
}

function hostGrabberMiddleware(req, res, next) {
  // auf req host information graife und console logge
  //console.log(req)
  //console.log(req.headers)
  console.log(req.headers.host);
  const customerHost = req.headers.host;
  console.log(`Die kunden Ip ist: ${customerHost}`);
  console.log(req.url);
  next();
}

export { showTimeMiddleware, hostGrabberMiddleware };
