import {expect} from 'chai';
import 'mocha';
import {sequelize} from '../../backend/models/_index'
import {HouseholdInstance} from '../../backend/models/interfaces/household-interface'
import {EMAIL_TYPE} from '../../backend/models/interfaces/email-interface';
import {HouseholdService} from '../../backend/services/household-service'
import {PHONE_TYPE} from '../../backend/models/interfaces/phone-interface';

describe('HouseholdService', () => {

  const delay = 500;

  const householdAttributes = {
    fatherFirst: 'Khiem',
    fatherLast: 'Tang',
    motherFirst: 'Hanh',
    motherLast: 'Nguyen',
    address: '7324 Park Village Road',
    city: 'San Diego',
    postalCode: '92129',
    emails: [
      { type: EMAIL_TYPE.STUDENT, address: 'khttang@gmail.com'}
    ],
    phones: [
      { type: PHONE_TYPE.STUDENT, number: '8586034923'}
    ]
  };

  describe('#createHousehold', () => {
    let householdService: HouseholdService;

    before((done: Function) => {
      setTimeout(() => {
        sequelize.sync().then(() => {
          const service = require('../../backend/services/household-service');
          householdService = service.householdService;
          done();
        }).catch((error: Error) => {
          done(error);
        });
      }, delay);
    });

    it('should create a household in the database correctly', () => {
      householdService.createHousehold(householdAttributes)
        .then((household: HouseholdInstance) => {
        expect(household.fatherFirst).to.equals(householdAttributes.fatherFirst);
        expect(household.fatherLast).to.equals(householdAttributes.fatherLast);
      }).catch((error: Error) => {
        //error;
      });
    });
  });




  it('should return hello world', () => {
    //const result = hello();
    //expect(result).to.equal('Hello world!');
  });

});
