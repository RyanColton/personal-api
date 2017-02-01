var user= {
 name: 'Ryan Colton',
 location: 'Provo Utah',
 occupations: [
     'Bluehost',
     'Marketecture',
     'Boostability',
     'Tomassos',
     'Technology Design'
 ],
 hobbies: [
   {
     name: 'Guitar Bulding',
     type: 'Woodworking'
   },
   {
     name: 'Coding',
     type: 'Computers'
   },
   {
     name: 'Watching Movies',
     type: 'Entertainment'
   }
 ],
 family: [
   {
     name: 'Marissa Colton',
     relation: 'Spouse',
     gender: 'Female'
   },
   {
     name: 'Christian Colton',
     relation: 'Brother',
     gender: 'Male'
   },{
     name: 'Cathy Colton',
     relation: 'Mother',
     gender: 'Female'
   }
 ],
 restaurants: [
   {
     name: 'Tucanos',
     type: 'Brazillian',
     rating: 8
   },
   {
     name: 'El Azteca',
     type: 'Mexican',
     rating: 9
   },
   {
     name: 'Bombay House',
     type: 'Indian',
     rating: 9
   }
 ]
};

module.exports = user;
