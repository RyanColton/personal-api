var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js')
var user = require('./user.js')
var app = express();


app.use(middleware.addHeaders);
app.use(bodyParser.json());

app.get('/name', mainCtrl.getName);

app.get('/location', mainCtrl.getLocation);

app.get('/occupations', mainCtrl.getOccupations);

app.get('/latest-occupation', mainCtrl.getLatesstOccupation);

app.get('/hobbies', mainCtrl.getHobbies);

app.get('/hobbies/:type', mainCtrl.getHobbieType)

app.get('/family', mainCtrl.getFamily),

app.get('/family/:gender', mainCtrl.getFamilyGender),

app.get('/restaurants', mainCtrl.getRestaurants)

app.get('/restaurants/:name', mainCtrl.getRestaurantsName)

app.get('/secrets/:username/:pin', mainCtrl.getSecrets)

app.get('/skills', mainCtrl.getSkills)

app.put('/name', mainCtrl.changeName)

app.put('/location', mainCtrl.changeLocation)

app.post('/hobbies', mainCtrl.addHobby)

app.post('/occupations', mainCtrl.addOccupation)

app.post('/family', mainCtrl.addFamilyMember)

app.post('/restaurants', mainCtrl.addRestaurant)

app.post('/skills', middleware.generateId, mainCtrl.addSkill)

app.listen(3000, function(){
  console.log('Listenting on 3000')
});
