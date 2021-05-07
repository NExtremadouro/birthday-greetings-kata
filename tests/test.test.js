var assert = require('assert');
var methods = require('../src/prepareMessages')

describe('Array', function() {
  describe('prepareMessages', function() {
    it('should return an array with 1 greeting for and array of 3 users with only 1 birthday', function() {
      const users = [ 
        {
          first_name: 'Doe',
          last_name: 'John',
          date: '1982/10/08',
          email: 'john.doe@foobar.com'
        },
        {
          first_name: 'Nuria',
          last_name: 'Extremadouro',
          date: '1992/05/07',
          email: 'john.doe@foobar.com'
        },
        {
          first_name: 'Sofía',
          last_name: 'Sánchez',
          date: '1982/10/08',
          email: 'john.doe@foobar.com'
        },
      ]

      const result = methods.prepareMessages(users)
      
      assert(result.length).should.equal(1)
    })

    it('should return an array with 2 greetings for and array of 3 users with 2 birthdays', function() {
      const users = [ 
        {
          first_name: 'Doe',
          last_name: 'John',
          date: '1982/10/08',
          email: 'john.doe@foobar.com'
        },
        {
          first_name: 'Nuria',
          last_name: 'Extremadouro',
          date: '1992/05/07',
          email: 'john.doe@foobar.com'
        },
        {
          first_name: 'Sofía',
          last_name: 'Sánchez',
          date: '1992/05/07',
          email: 'john.doe@foobar.com'
        },
      ]

      const result = methods.prepareMessages(users)
      
      assert(result.length).should.equal(2)
    })
  })

  describe('readData', function() {})
  describe('sendEmails', function() {})
});