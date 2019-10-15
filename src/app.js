const express = require('express')
const path = require ('path')
const hbs = require('hbs')


const app= express()

//console.log(__dirname)
//console.log(path.join(__dirname, '../public'))

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

console.log(partialsPath)


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Ralph'
    })
})
app.get('/about',(req, res) => {
    res.render('about', {
        title: 'About',
        name:'Dark sky'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        content: 'Help me',
        title: 'Help'
    })
})

app.get('/weather',(req,res)=> {
    res.send({
    	forecast: 'its 50 degrees',
    	location: 'Nigeria'
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})