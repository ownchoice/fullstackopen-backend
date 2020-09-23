const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

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

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
