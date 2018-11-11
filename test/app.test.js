const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

const app = require('../src/app.js');

describe('#GET /', () => {

    it('should return Hello Codeship!', done => {
        chai.request(app).get('/')
            .end((error, response) => {           
                expect(response.status).to.be.equal(200);
                expect(response.ok).to.be.true;
                expect(response.text).to.equal('Hello Codeship!');
            });
        done();
    });

});



