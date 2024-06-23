const  express = require('express');
const z = require('zod');
const  app = express();
const  port = 3000;
app.use(express.json());
function validate(obj){
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
  })
  return schema.safeParse(obj);
//   console.log(response);
}

app.post('/login', (req, res) =>{
    const response = validate(req.body);
  if(!response.success)
  {
    res.json({
      msg: "your inputs are wrong "
    })
  }
  else{
    res.json({
      msg: "your inputs are correct"
    })
  }
})
app.listen(port);