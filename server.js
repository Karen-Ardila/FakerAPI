const express = require('express')
const faker = require('faker');
const app = express()

app.get('/api/users/new', function (req, res) {
    res.send(new User())
})

app.get('/api/companies/new', function (req, res) {
    res.send(new Company())
})

app.get('/api/user/company', function (req, res) {
    const user = new User()
    const company = new Company()
    res.send({
        user,
        company
    })
})

app.get('*', (req, res) => {
    res.status(404).send()
})

app.listen(3000)

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor() {
        this.adress = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}