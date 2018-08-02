module.exports = function (app)

{




 const Task = require('../models/task');

//fetch all items in the task dbase
  app.get('/api/getTask',function (request,response)
  {
     console.log('getTask method');

     Task.find({},function(err,tasks)
      {
        if(err)
         {
           console.log('err on db'+err);
         }
         else
         {
             response.json(tasks)
         }

      })
  });






//fetch items by individual id
  app.get('/api/:id', function(request,response){
    console.log('single task');
    Task.findById({_id:request.params.id},function(err,task)
    {
      if(err)
       {
         console.log('err on fetch By Id'+request.params.id);
       }
       else {
         response.json(task)
       }
    });
  });


  //post method of insert items in tasks
  app.post('/api/insertTask',function(request,response)
   {
   console.log('post method insert');

   new Task({
         items: request.body.items
     }).save(function(err)
     {
       if(err)
        {
          console.log('erroron db'+err);
        }
        else {
          console.log();
          response.send('inserted');
        }
     });
  });


//update
app.put('/api/updateTask/:id',function(request,response)
{
  console.log('update By Id');
  Task.findByIdAndUpdate(request.params.id,
    {
    $set:{
     items:request.body.items
   }},
    {
      //if it is false revert into exist record
      //if it is true update the record
      new :true
    },
      function (err, updatedTask)
      {
         if(err)
          {
            console.log('err'+err);
          }
          else {
            response.json(updatedTask)
          }
  })
});

//delete findById
app.delete('/api/deleteTask/:id',function(request,response)
{
  Task.remove({_id:request.params.id},function(err,removedTask)
  {
     if(err)
      {
        console.log('error on deleted'+err);
      }
      else {
        response.send('deleteTask');
      }

  })

})


}
