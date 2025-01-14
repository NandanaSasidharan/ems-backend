//1. import express
const express = require('express')

//2. import cors
const cors = require('cors')

const logic = require('./services/logics')

//3 create an application using express
const emsServer = express()

//4 Using cors to connect frontend port
emsServer.use(cors({
    origin:'http://localhost:3000'
}))

//5. create a middleware for parsing json data
emsServer.use(express.json()) 

//6 Define a port number
 emsServer.listen(8000,()=>{
    console.log("emsServer listening on the port 8000");
 })

 //7 API call for get all employee details  localhost:8000/get-all-employees
 emsServer.get('/get-all-employees',(req,res)=>{
        // logic - function -getAllEmployees()
        logic.getAllEmployees().then((response)=>{
            res.status(response.statusCode).json(response)
        })
 })

  //API call for add an employee details  localhost:8000/add-employee

  emsServer.post('/add-employee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response)
    })
  })

  //API call for delete an employee details - localhost:8000/delete-employee

  emsServer.delete('/delete-employee/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then
    ((response)=>{
        res.status(response.statusCode).json(response)
    })
  })

  //API call for view an empl0yee details - loaclhost :8000/add-employee

emsServer.get('/view-employee/:id',(req,res)=>{
  logic.getAnEmployee(req.params.id).then
  ((response)=>{
      res.status(response.statuscode).json(response)

  })
})


//API call for update an empl0yee details - loaclhost :8000/add-employee

emsServer.post('/update-employee/:id',(req,res)=>{
  //logic function 
  logic.updateEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then
  ((response)=>{
      res.status(response.statuscode).json(response)

  })
})
