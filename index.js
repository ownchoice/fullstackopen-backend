const http = require('http');

let notes = [
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
const app = http.createServer(
  (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(notes))}
)

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
