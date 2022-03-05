const {validationResult}=require("express-validator");
const Instructor=require("../Models/InstructorModel");

exports.getInstructors=function(request,response,next){

    console.log("Get all Instructors");
    Instructor.find({})
            .then(result=>{
                response.status(200).json(result)
            })
            .catch(error=> next(error));
}
//----------------------------------------- add
exports.createInstructor=(request,response,next)=>{

    // department.findOne({_id:request.body.department})    
    //validation result
    let InstructorObject=new Instructor({
        _id:request.body.id,
        FullName:request.body.fullName,
        courses:request.body.courses,
        department:request.body.department
    })
    let name = request.body.fullName

    InstructorObject.save()
                .then(result=>{
                    response.status(201).json({message:`${name} added successfully`})
                }).catch(error=> next(error))
} 

//---------------------------- Update -------------------//
exports.updateInstructor=(request,response,next)=>{
  let name = request.body.fullName
  Instructor.updateOne({_id:request.body.id},
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


//------------------- delete Instructor ------------- //
exports.deleteInstructor=(request,response,next)=>{
  //    console.log(request.query.id,request.query.name); //querryString
  //    console.log(request.params);// parametrs in URL
  //     // response.status(201).json({message:"deleted",data:request.query});
      let errors=validationResult(request);
      let userId = request.body.id 
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
          Instructor.deleteOne({_id:request.params.id})
          .then(result=>{
              response.status(201).json({message:`user with id = ${userId} is deleted`})
          })
          .catch(error=>{
              error.status=500;
              next(error);
          })
      }
  }
  