const express = require('express')

const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncedentController')
const ProfileController = require('./controller/ProfileController')
const SessionsControler = require('./controller/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionsControler.create)

routes.get('/ongs', OngController.index )
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete);



module.exports= routes;