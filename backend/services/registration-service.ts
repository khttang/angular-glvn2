import {logger} from '../utils/logger';
import {RegistrationAttributes, RegistrationInstance} from '../models/interfaces/registration-interface';
import {models, sequelize} from '../models/_index';
import {Transaction} from 'sequelize';


export class RegistrationService {

  createRegistration(registrationAttributes: RegistrationAttributes): Promise<RegistrationInstance> {
    const promise = new Promise<RegistrationInstance>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Registration.create(registrationAttributes).then((registration: RegistrationInstance) => {
          logger.info(`Created registration for student id ${registrationAttributes.studentId}.`);
          resolve(registration);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  /*
  retrieveHouseholds(): Promise<Array<HouseholdInstance>> {
    const promise = new Promise<Array<HouseholdInstance>>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Household.findAll().then((households: Array<HouseholdInstance>) => {
          logger.info('Retrieved all households.');
          resolve(households);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }
  */

  updateRegistration(id: string, registrationAttributes: any): Promise<void> {
    const promise = new Promise<void>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Registration.update(registrationAttributes, {where: {id: id}})
          .then((results: [number, Array<RegistrationInstance>]) => {
            if (results.length > 0) {
              logger.info(`Updated registration with id ${id}.`);
            } else {
              logger.info(`Registration with id ${id} does not exist.`);
            }
            resolve(null);
          }).catch((error: Error) => {
            logger.error(error.message);
            reject(error);
          });
      });
    });

    return promise;
  }
}

export const registrationService = new RegistrationService();
