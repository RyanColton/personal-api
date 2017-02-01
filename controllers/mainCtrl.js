var user = require('./../user.js')
var skillz = require('./../skillz.js')
var secrets = require('./../secrets.js')
module.exports = {
    getName: function(req, res){
          res.status(200).json(user.name)
          },
    getLocation: function(req, res){
          res.status(200).json(user.location)
          },
    getOccupations: function(req, res){
          var list = Array.from(user.occupations)
          if (req.query.order && req.query.order.toLowerCase() == 'desc'){
              list.sort()
            } else if(req.query.order && req.query.order.toLowerCase() == 'asc'){
              list.sort().reverse()
            }
          res.status(200).json(list)
          },
    getLatesstOccupation: function(req, res){
          res.status(200).json(user.occupations[0])
          },
    getHobbies: function(req, res){
          res.status(200).json(user.hobbies)
          },
    getHobbieType: function(req, res){
          res.status(200).json(user.hobbies.filter(function(value){
            if(req.params.type.toLowerCase() == value.type.toLowerCase()){
              return value
          }}))},
    getFamily: function(req, res){
          res.status(200).json(user.family)
          },
    getFamilyGender: function(req, res){
          res.status(200).json(user.family.filter(function(value){
            if(req.params.gender.toLowerCase() == value.gender.toLowerCase()){
              return value
          }}))},
    getRestaurants: function(req, res){
          res.status(200).json(user.restaurants)
          },
    getRestaurantsName: function(req, res){
          res.status(200).json(user.restaurants.filter(function(value){
            if(req.params.name.toLowerCase() == value.name.toLowerCase()){
              return value
          }}))},
    getSkills: function(req, res){
          var skills = Array.from(skillz)
          if(req.query.experience && req.query.experience.toLowerCase() == 'basic' ){
            for(var i = 0; i < skills.length; i++){
              if(req.query.experience.toLowerCase() !== skills[i].experience.toLowerCase() ){
                skills.splice(i--, 1)
              }
            }
          } else if(req.query.experience && req.query.experience.toLowerCase() == 'intermediate' ){
            for(var i = 0; i < skills.length; i++){
              if(req.query.experience.toLowerCase() !== skills[i].experience.toLowerCase() ){
                skills.splice(i--, 1)
              }
            }
          } else if(req.query.experience && req.query.experience.toLowerCase() == 'advanced' ){
            for(var i = 0; i < skills.length; i++){
              if(req.query.experience.toLowerCase() !== skills[i].experience.toLowerCase() ){
                skills.splice(i--, 1)
              }
            }
          }
          res.status(200).json(skills)
        },
    getSecrets: function(req, res){
          if(req.params.username == 'ryancolton' && req.params.pin == '1234'){
          res.status(200).json(secrets)
        } else{
          res.status(200).send('Incorrect Login')
        }
          },
    changeName: function(req,res){
          user.name = req.body.name
          res.status(200).send('Updated')
        },
    changeLocation: function(req,res){
          user.location = req.body.location
          res.status(200).send('Updated')
        },
    addHobby: function(req,res){
          user.hobbies.push(req.body.hobby)
          res.status(200).send('Added')
        },
    addOccupation: function(req,res){
          user.occupations.push(req.body.occupation)
          res.status(200).send('Added')
        },
    addFamilyMember: function(req,res){
          user.family.push(req.body.family)
          res.status(200).send('Added')
        },
    addRestaurant: function(req, res){
          user.restaurants.push(req.body.family)
          res.status(200).send('Added')
        },
    addSkill: function(req, res){
        skillz.push(req.body)
        res.status(200).send('Added')
      },

}
