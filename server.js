const express = require('express')
const app = express()
const db = require('./db');
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());

require('dotenv').config();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Welcome to my hotel..!')
  })

  
 



  // app.post('/api/tasks', async(req, res)=>{
  //   try{
  //     const task = new Task(req.body)
  //     await task.save();
  //     res.status(201).send(task);
  //   }catch(err){
  //     console.log(err);
  //     res.status(400).json({err: 'Internal server error'})
  //   }
  // })

  // app.get('/api/tasks', async(req, res)=>{
  //   try {
  //     const tasks = await Task.find();
  //     res.status(200).send(tasks);
  //   } catch (error) {
  //     res.status(500).send(error)
  //   }
  // })

//Import the router file


const personRoutes = require('./routes/personRoutes')
//use the router
app.use('/person', personRoutes)

const menuRoutes = require('./routes/menuRoutes')
app.use('/menu', menuRoutes)



  app.listen(PORT, ()=>{
    console.log('listening on port 3000 and server is alive');
  });


