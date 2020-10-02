const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connections')

describe('ONG', ()=>{
    beforeEach( async ()=>{
      await  connection.migrate.rollback();
      await  connection.migrate.lates();
    })

    afterAll( async ()=>{
      await  connection.destroy();
    })

    it('should be able to create a new ONG', async () =>{
        const response= await request(app)
        .post('/ongs')
        .send({
                name:"APAD",
                email:"contato@teste,com",
                whatsapp:"04872012",
                city:"Rio do Sul",
                uf: "SC" 
        });

        expect(response.body).toHavePropert('id');
        expect(response.body.id).toHaveLength(8)
    });
})