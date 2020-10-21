const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI,  {

    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    // return self.connection.dropDatabase();
  })
   .then(() => {
     //Run your code here, after you have insured that the connection was made
     (async () => {
      try{
      //  const crear = await Recipe.create({
      //    title : 'Le manjar',
      //    level : 'Amateur Chef',
      //    ingredients: ['1/2 cup rice vinegar', '5 tablespoons honey'],
      //    cuisine: 'ITALIAN',
      //    dishType: 'snack',
      //    image: 'https://www.valenciabonita.es/wp-content/uploads/2017/02/algo-tradiconal-1080x675.jpg',
      //    creator: 'El paellas',
      //    })
      
     }
     catch(error){
       console.log(error)
     }
    })();

    // (async () => {
    //   try {
    //     const datos = await Recipe.insertMany(data);
    //     //console.log(`This user was saved ${datos}`);
    //     datos.forEach(element => {
    //       console.log(element.title);
    //     });
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // })();
    
      (async () => {
    try{
      const receta = await Recipe.updateOne({title: 'Rigatoni alla Genovese'}, {duration: 100})
      console.log('receta modificada', receta)
    }
    catch(error){
      console.log(error.message)
    }
  })();

  (async () => {
try {
  const deleted = await Recipe.deleteOne({ title: "Rigatoni alla Genovese" });
  console.log(deleted);
} catch (error) {
  console.log(error.message);
}
})();

(async () => {
  try{
    const close = await mongoose.connection.close()
    console.log('The DB is closed', close)
  }
  catch(error){
  
  }
  })();


    })

.catch(error => {
  console.error('Error connecting to the database', error);
  });

  
  
 

  






//   (async () => {
//     try{
//       const close = await Recipe.conection.close()
//       console.log('The DB is closed')
//     }
//     catch(error){
  
//     }
//   })();
  



  
  




  

  
  
  