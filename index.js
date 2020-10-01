require('dotenv').config()
const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Person = require('./models/person')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

// const morgan = require('morgan')
// app.use(morgan('tiny'))
// morgan.token('mitokenpropio', function (req, res) { return JSON.stringify(req.body) })
// app.use(morgan(function (tokens, req, res) {
//   if (tokens.method(req, res) === 'POST') {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, 'content-length'), '-',
//       tokens['response-time'](req, res), 'ms',
//       tokens.mitokenpropio(req, res)
//     ].join(' ')
//   } else {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, 'content-length'), '-',
//       tokens['response-time'](req, res), 'ms'
//     ].join(' ')
//   }
// }))

// let persons = [
//   {
//     id: 1,
//     name: "Arto Hellas",
//     number: "351-7891777",
//   },
//   {
//     id: 2,
//     name: "Ada Lovelace",
//     number: "4365-41278965",
//   },
//   {
//     id: 3,
//     name: "Dan Abramov",
//     number: "73-16-4635892",
//   },
//   {
//     id: 4,
//     name: "Mary Poppendick",
//     number: "63-01-78965",
//   },
//   {
//     id: 5,
//     name: "Raúl Was Here",
//     number: "453-171424",
//   },
//   {
//     id: 6,
//     name: "Solo en el servidor",
//     number: "453-171424",
//   }
// ]

app.get('/api/persons', (request, response, next) => {
  Person.find({})
    .then(people => {
      response.json(people)
    })
    .catch(error => next(error))
})

app.get('/info', (request, response) => {
  const datenow = new Date(Date.now())
  const datestr = datenow.toLocaleDateString('es-AR')
  Person.find({}).then(contacts => {
    console.log(contacts);
    response.send(`<p>Phonebook has ${contacts.length} contacts.</p><p>${datenow}</p>`)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(personFound => {
      response.json(personFound)
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  // name_list = persons.map(person => person.name)

  if (!body.name || !body.number) {
    return response.status(400).json({error: 'You must provide both a valid name and number.'})
  }
  
  // if (name_list.includes(body.name)) {
  //   return response.status(400).json({error: 'Name already exists.'})
  // }

  const newPerson = new Person({
    name: body.name,
    number: body.number,
  })
  
  newPerson
    .save()
    .then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => next(error))

})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'Unknown endpoint'})
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'Malformatted ID'})
  }

  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
