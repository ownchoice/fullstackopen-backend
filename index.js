const { response } = require('express')
const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())
// app.use(morgan('tiny'))

morgan.token('mitokenpropio', function (req, res) { return JSON.stringify(req.body) })

app.use(morgan(function (tokens, req, res) {
  if (tokens.method(req, res) === 'POST') {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      tokens.mitokenpropio(req, res)
    ].join(' ')
  } else {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }
}))

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "351-7891264",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "4365-41278965",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "73-16-4635892",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "63-01-78965",
  },
  {
    id: 5,
    name: "Raúl Was Here",
    number: "453-171424",
  },
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  const datenow = new Date(Date.now())
  const datestr = datenow.toLocaleDateString('es-AR')
  res.send(`<p>Phonebook has infor for ${persons.length} people.</p><p>${datenow}</p>`)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  name_list = persons.map(person => person.name)
  if (!body.name || !body.number) {
    return response.status(404).json({error: 'You must provide both a valid name and number.'})
  } else if (name_list.includes(body.name)) {
    return response.status(404).json({error: 'Name already exists.'})
  }
  const newId = Math.ceil(Math.random() * 99999999)
  const id_list = persons.map(person => person.id)
  while (id_list.includes(newId)) {
    const newId = Math.ceil(Math.random() * 99999999)
  }
  // console.log(newId);
  const newPerson = {
    id: newId,
    name: body.name,
    number: body.number,
  }
  // console.log(request.body);
  // persons = [ ...persons, newPerson ]
  persons = persons.concat(newPerson)
  console.log(persons);
  response.json(newPerson)
})

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
