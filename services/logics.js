//import db.js
const db = require('../services/db')

//logic for get all employees from the database
const getAllEmployees=()=>{
    return db.employee.find().then(
        (result)=>{//result-> all employees details
            if(result){
                  return{
                    statusCode:200,
                    employees:result
                  }
            }
            else{
                return{
                    statusCode:404,
                    message:'Employees not found'
                }
            }
        }
    )
}

//logic for add an employees to the database
const addEmployee=(id,name,age,designation,salary)=>{
    return db.employee.findOne({id}).then((result)=>{
//if id is present in the db
if(result){
    return{
        statusCode:404,
        message:"Employee already exist"
    }
}
else{
    //if id is not present in the db, to save all the data in db
    const newEmployee=new db.employee({id,name,age,designation,salary})
    newEmployee.save()
    return{
        statusCode:200,
        message:"Employee added successfully..."
    }
}
    })
}
   
//logic for delete an employee to the database
const deleteEmployee=(id)=>{
    return db.employee.deleteOne({id}).then((result)=>{
        if(result){
            return{
            statusCode:200,
            message:"Employee details delete successfully"
        }
    }
    else{
        //if id is not present in the db
        return{
            statusCode:404,
            message:"can't delete an employee from the database"
        }
    }
    })
}

//logic for get an employee

const getAnEmployee=(id)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statuscode:200,
                result:result
            }
        }else{
            return{
            
                    statuscode:200,
                    message:'employee not found'
                }
            }
        
       
     
    })
}

//logic for update an employee details
const updateEmployee=(id,name,age,designation,salary)=>{//updated details
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            //assign updated emmployee details to the mongodb project
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;
            //to save the employee details to the mongodb
            result.save();
            return{
                statuscode:200,
                message:'employees details updated successfully'
            }
        }else{
            return{
            
                    statuscode:200,
                    message:'employees not found'
                }
            }
        
       
     
    })

}

module.exports={
    getAllEmployees,addEmployee,deleteEmployee,getAnEmployee,updateEmployee
}


   
