const express = require('express')
const stringDecoder = require('string_decoder').StringDecoder;

const app = express()
const port = 3000

//To read data from request bofy
app.use(express.json());
// const port2 = 3005

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send('Hello Users!')
  })

app.get('/test', (req, res) => {
  res.send('Hello Tests!!!')
})

app.get('/posts', (req, res) => {
    res.send('Hello Posts!')
})

app.post('/users', (req, res) => {
    res.send('user created!')
    console.log(req.body);

    // const decoder = new stringDecoder('utf8');
    // let buffer='';

    // req.on('data',function(data){
    //     buffer += decoder.write(data)
    // })
    // req.on('end',function(){
    //     buffer += decoder.end()
    //     // res.end("hello Bye")
    //     console.log(buffer);
    // })

  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.listen(port2, () => {
//     console.log(`Example app listening on port ${port2}`)
//   })
