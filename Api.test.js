const api = require('./Api');
const express = require('express');
const request = require('supertest');

const iniApi = ()=>{
    const app = express();
    app.use(api());
    return  app;
}

describe('GET /saludo',()=>{
    test('Deberia de retornar un json con datos',async () =>{
        const app = iniApi();
        const res = await request(app).get('/saludo');
        console.log("----------------------------------");
        console.log(res.res.text);
        expect(JSON.parse(res.res.text)).toEqual({
            author:"Byron",
            mess:"Hola!"
        });

    });
});