
'use strict'  //dipaksa rapih penulisannya

const chai = require('chai');
const chaiHTTP = require('chai-http');

const server = require('../app');
const Data = require("../models/datatipe");

const should = chai.should();
chai.use(chaiHTTP);

describe('data', function () {

    Data.collection.drop();

    beforeEach(function (done) {
        let data = new Data({
            string: 'Test Data',
            integer: 123456,
            float: 123.456,
            date: '12 Desember 2020',
            boolean: true
        });
        data.save(function(err){
           done(); 
        })

    });

    afterEach(function(done){
        Data.collection.deleteMany();
        done();
    })

    it('Should list All data on /api/data GET', function(done){
        chai.request(server)
        .get('/api/data')
        .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body[0].should.have.property('_id');
            res.body[0].should.have.property('string');
            res.body[0].should.have.property('integer');
            res.body[0].should.have.property('float');
            res.body[0].should.have.property('date');
            res.body[0].should.have.property('boolean');
            res.body[0].string.should.have.equal('Test Data');
            res.body[0].integer.should.have.equal(123456);
            res.body[0].float.should.have.equal(123.456);
            res.body[0].date.should.have.equal('12 Desember 2020');
            res.body[0].boolean.should.have.equal(true);
            done();

        })
    })

    it('Should add a SINGLE data on /api/data POST', function(done){
        chai.request(server)
        .post('/api/data')
        .send({'string':'Tes Pos', 'integer':654321, 'float': 654.321, 'date':'12 Desember 2021', 'boolean': false})
        .end(function(err, res){
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('string');
            res.body.should.have.property('integer');
            res.body.should.have.property('float');
            res.body.should.have.property('date');
            res.body.should.have.property('boolean');
            res.body.should.have.property('_id');
            res.body.string.should.equal('Tes Pos');
            res.body.integer.should.equal(654321);
            res.body.float.should.equal(654.321);
            res.body.date.should.equal('12 Desember 2021');
            res.body.boolean.should.equal(false);
            done();

        })
    })

    it('Should UPDATE a SINGLE data on /api/data/<id> PUT', function(done){
        chai.request(server)
        .get('/api/data')
        .end(function(err, res){
            chai.request(server)
            .put(`/api/data/${res.body[0]._id}`)
            .send({string:'Tes Edit', integer :654321, float : 654.321, date :'12 Desember 2021', boolean : false})
            .end(function (err, response){
                response.should.have.status(201);
                response.should.be.json;
                response.body.should.be.a('object');
                response.body.should.have.property('string');
                response.body.should.have.property('integer');
                response.body.should.have.property('float');
                response.body.should.have.property('date');
                response.body.should.have.property('boolean');
                response.body.should.have.property('_id');
                response.body.string.should.equal('Tes Edit');
                response.body.integer.should.equal(654321);
                response.body.float.should.equal(654.321);
                response.body.date.should.equal('12 Desember 2021');
                response.body.boolean.should.equal(false);
                done();

            })

        })
    })

    it('Should delete a SINGLE data on /api/data/<id> DELETE', function(done){
        chai.request(server)
        .get('/api/data')
        .end(function(err, res){
            chai.request(server)
            .delete(`/api/data/${res.body[0]._id}`)
            .end(function (err, response){
                response.should.have.status(201);
                response.should.be.json;
                response.body.should.be.a('object');
                response.body.should.have.property('string');
                response.body.should.have.property('integer');
                response.body.should.have.property('float');
                response.body.should.have.property('date');
                response.body.should.have.property('boolean');
                response.body.should.have.property('_id');
                response.body.string.should.equal('Test Data');
                response.body.integer.should.equal(123456);
                response.body.float.should.equal(123.456);
                response.body.date.should.equal('12 Desember 2020');
                response.body.boolean.should.equal(true);
                done();

            })

        })
    })

});

