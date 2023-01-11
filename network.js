fetch('fdb')
  .then(function (response) {
    if (response.ok) {
      return response.blob();
    }
    throw new Error('Network response was not ok.');
  })
  .catch(function (error) {
    console.log(
      'There has been a problem with your fetch operation: ',
      error.message
    );
  });