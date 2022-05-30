const express=require('express');
const app = express();

app.set('view engine','ejs')

const PORT = 5000;

app.get('/',(req,res)=>{
 res.render("index")

    })


    

 app.get('/home',(req,res)=>{
 res.send('Our home page')
     })

app.get('/services',(req,res)=>{
 res.send('Our Services page')
    })
    
app.get('/contact',(req,res)=>{
 res.send('contact us page')
    })
               
 

app.listen(PORT,(err)=>{
    if(err) throw console.log(err)
    console.log('listen to port '+PORT)
})