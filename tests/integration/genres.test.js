const request = require('supertest');
let server;

describe('api/generes', () => { 

    beforeEach(()=>{server = require('../../index')});
    afterEach(()=>{server.close();});

    describe('GET /', () => { 
        it('should return all genrers',async() =>{
            const res = await request(server).get('/api/genres');
            expect(res.status).toBe(200);
        });
     });

 });