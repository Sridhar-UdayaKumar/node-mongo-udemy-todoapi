const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

describe('POST /todos', () => {
  it('Should create a new todo', (done) => {
    var text = 'test text';

    request(app)
    .post('/todos')
    .send({text})
  });
});
