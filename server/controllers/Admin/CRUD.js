const Student = require("../../database/model/Model");



// create and save new user
exports.create = async(req,res,next) =>{
   // res.status(200).json({success: true})

   // validate request
   try {
       // new user 
        const {
            first_name,
            last_name,
            mobile,
            email,
            date_of_birth,
            age,gender,
            salutation,
            blood_group,
            nationality,
            province,
            address,
            course,
            password,
        } = req.body;

       const studentData = {
            first_name,
            last_name,
            mobile,
            email,
            date_of_birth,
            age,gender,
            salutation,
            blood_group,
            nationality,
            province,
            address,
            course,
            password,
       }
       const newStudent = new Student(studentData);
        // save student in the database
        await newStudent.save()

        res.status(200).redirect('/add-student');
        
   } catch (error) {
       console.log(`ERROR:: ${error}`.blue);
       return res.status(500).json({
           message: error.message || "sorry Some error occurred while creating student"
       })
   }
  
}





// retrieve and return all users/ retrive and return a single user
exports.find = async(req,res,next) =>{
   try {
       if(req.query.id){
           const id = req.query.id
           const data = await Student.findById(id);
           if(!data){
               return res.status(404).json({
                   success: false,
                   msg:` sorry no styudent with the provided id ::${id} to show `
               })
           }else{
               return res.status(200).json({
                   success: true,
                   student: dataata
               })
           }

       }else{
          const data = await  Student.find()
                if(!data){
                    console.log(`ERROR::${error}`)
                    return res.status(200).json({
                        success: false,
                        students: []
                    })
                }else{
                    res.status(200).json({
                        success: true,
                        students: data
                    })
                }         
       }
   } catch (error) {
       console.log(`ERROR:: ${error}`.blue);
       return res.status(500).json({
           success: false,
           msg: "sorry it looks like the server was is down try agen "
       })
   }
}





// Update a new idetified student by user id

exports.update = async () =>{
  try {
      const id = req.query.id;
      if(!req.body){
          return res.student(400).json({
              success: false,
              message: "sorry Data to update con not be empty"
          })
       }else{
            const data = await Student.findByIdAndUpdate(id,req.body,{ useFindAndModify: false})
            if(!data){
                return res.status(404).json({
                    success: false,
                    message: `can not Update student with ${id}. Maybe student not found!`
                })
            }else{
                return res.status(200).json({
                    success: true,
                    data
                })
            }
       }
  } catch (error) {
      console.log(`ERROR::${error}`.blue);
      return res.status(500).json({
          success: false,
          message: 'Sorry There was an error Updating Student information  '
      })
  }
}


// Delete a user with specified user id in the request

exports.delete = async () =>{
    try {
        const id = req.query.id;
          const data = await Student.findByIdAndDelete(id);
          if(!data){
              return res.status(404).json({
                  success:false,
                  message: `Cannot Delete student with ${id}. Maybe id is Wrong`
              })
           }else{
               return res.status(200).json({
                   success: true,
                   message: `student with id:${id} Deleted successfuly!`
               })
           }
    } catch (error) {
        console.log(`ERROR:: ${error}`.blue)
        return res.status(500).json({
            success: false,
            message: `Sorry could not Delete student with id:${id}`
        })
    }
}