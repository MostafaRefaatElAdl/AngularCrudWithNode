const {validationResult}=require("express-validator");
const Student=require("./../Models/StudentModel");

exports.getStudents=function(request,response,next){

    console.log("Get all Students");
    Student.find({})
            .then(result=>{
                response.status(200).json(result)
            })
            .catch(error=> next(error));
}

//---------------------------- Update -------------------//
exports.updateStudent=(request,response,next)=>{
  let name = request.body.fullName
  Student.updateOne({_id:request.body.id},
     {
         $set:{
          fullName:request.body.fullName,
          department:request.body.department,
         }
     }).then(result=>{
         // console.log("ID fro Update ", result);

         //check 
         response.status(201).json({message:`${name} Updated`})
     })
     .catch(error=>{
         error.status=500;
         next(error);
     })
} 


//------------------- delete student ------------- //
exports.deleteStudent=(request,response,next)=>{
  //    console.log(request.query.id,request.query.name); //querryString
  //    console.log(request.params);// parametrs in URL
  //     // response.status(201).json({message:"deleted",data:request.query});
      let errors=validationResult(request);
      let userId = request.params.id
      if(!errors.isEmpty())
      {
          let error=new Error();
          error.status=422;
          error.message=errors.array().reduce((current,object)=> current+object.msg+ " ","");
          next(error);
          // throw error;
          // console.log(errors);
      }
      else
      {
          Student.deleteOne({_id:request.params.id})
          .then(result=>{
              response.status(201).json({message:`user with id = ${userId} is deleted`})
          })
          .catch(error=>{
              error.status=500;
              next(error);
          })
      }
  }
  