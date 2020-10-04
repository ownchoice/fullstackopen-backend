const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

let url = process.env.MONGODB_URI
if (process.env.NODE_ENV === 'test') {
  url = process.env.TEST_MONGODB_URI
}

console.log('connecting to', url)
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, unique: true },
  number: { type: String, required: true, minlength: 8 },
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// const Person = mongoose.model('Person', personSchema)
module.exports = mongoose.model('Person', personSchema)