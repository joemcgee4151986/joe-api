const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000


app.use(cors())
let joe = {
    'age':34,
    'birthName': 'Joe',
    'birthPlace': 'Phoenix'
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')

})
app.get('/api/joe', (request, response) =>{
    response.json(joe)
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
} )