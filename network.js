setInterval(() => {
  fetch('fdb.js')
    .then(function (response) {
      if (response.ok) {
        return response.blob();
      }
      throw new Error('Network response was not ok.');
    })
    .catch(function (error) {
      console.log('No Network');
    });
}, 0);
