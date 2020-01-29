const keyApi= 'nKZpJ44prswfb3Q8'


// fetch(`http://api.eventful.com/json/events/get?app_key=${keyApi}&id=E0-001-000278174-6`) .then((response) => {
//     return response.json();
//   })
//   .then((myJson) => {
//     console.log(myJson);
//   });


fetch(`https://eventful.com/oauth/authorize?oauth_token=c48271d55bb092a97f82`) 
.then(fetch(`http://api.eventful.com/json/events/get?id=E0-001-000278174-6)`))

.then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
