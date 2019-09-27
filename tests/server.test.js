const expect = require('expect');
const request = require('supertest');
const app = require('../server');

describe('POST /auth/login', () => {
    it('Should login user and return auth token', (done) => {
        request(app)
            .post('https://wunderlist2019.herokuapp.com/auth/login')
            .send({
                email: "grid",
                password: "cooler"
            })
            .expect(200)
            .expect((res) => {
                expect(res.headers['x-auth']).not.toBeNull();
            })

            .end((err, res) => {
                if (err) return done(err);
            })
        done()
    });
    it('Should reject invalid login', (done) => {
        request(app)
            .post('https://wunderlist2019.herokuapp.com/auth/login')
            .send({
                email: "wonder",
                password: "tony"
            })
            .expect(400)
            .expect((res) => {
                expect(res.headers['x-auth']).toBeUndefined();
            })
            .end((err, res) => {
                if (err) return done(err);
            })
        done()
    });
})

describe('GET all /tasks', () => {
    it('should load all tasks', (done) => {
        request(app)
            .get('https://wunderlist2019.herokuapp.com/tasks/14')
            .send({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdyaWQiLCJpYXQiOjE1Njk1MjI1ODEsImV4cCI6MTU2OTk1NDU4MX0.Cb9v83vZke4MU - Ixh6byBKFgiDLnAMq0bFh - _MOFR9g" })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
            })
        done()
    })
})