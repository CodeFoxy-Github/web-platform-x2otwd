setInterval(() => {
  fetch('fdb.js').catch(function (error) {
    console.log('No Network');
  });
}, 0);
