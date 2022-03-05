const {validationResult}=require("express-validator");
const Department= require("./../Models/DepartmentModel");

//---------------------------------------  list
exports.getDepartments=function(request,response,next){

    Department.find({})
              .then(result=>{
                response.status(200).json(result);
              })
              .catch(error=>{
                    error.status=500;
                    next(error);
              })
}
//------------------ Get by ID --------------//

exports.getDepartmentById=(request,response,next)=>{
    Department.findOne({id:request.params.id})
    .then(data=>{
        
        if(data==null) next(new Error("Department is not found"))
        response.status(200).json(data)

    })
    .catch(error=>{
        next(error);
    })
}

//----------------------------------------- add
exports.createDepartment=(request,response,next)=>{

    console.log(request);
    console.log(request.body.id);
    //id : int , name :string , location : number+string
    let errors=validationResult(request);

    if(!errors.isEmpty())
    {
        let error=new Error();
        error.status=422;
        error.message=errors.array().reduce((current,object)=> current+object.msg+ " , ","");
        next(error);
        console.log(errors);
    }
    else
    {
        let departmentObject=new Department({
            id:request.body.id,
            name:request.body.name,
            location:request.body.location
        });

        departmentObject.save()
                        .then(object=>{
                            response.status(201).json({message:"added"});
                        })
                        .catch(error=>{
                            error.status=500;
                            next(error);
                        })   
    }
};//add

//------------------------------------------- update
exports.updateDepartment=(request,response,next)=>{

     Department.updateOne({id:request.body.id},
        {
            $set:{
                name:request.body.name,
                location:request.body.location
            }
        }).then(result=>{
            // console.log("ID fro Update ", result);

            //check 
            response.status(201).json({message:"Updated"})

        })
        .catch(error=>{
            error.status=500;
            next(error);
        })

}


//------------------------------------------- delete
exports.deleteDepartment=(request,response,next)=>{
//    console.log(request.query.id,request.query.name); //querryString
//    console.log(request.params);// parametrs in URL
//     // response.status(201).json({message:"deleted",data:request.query});
    let errors=validationResult(request);

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
        Department.deleteOne({id:request.params.id})
        .then(result=>{
            response.status(201).json({message:"deleted"})

        })
        .catch(error=>{
            error.status=500;

            next(error);
        })
    }
}


