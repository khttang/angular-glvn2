import {logger} from '../utils/logger';
import {HouseholdAttributes, HouseholdInstance} from '../models/interfaces/household-interface';
import {models, sequelize} from '../models/_index';
import {Transaction} from 'sequelize';


export class HouseholdService {
  createHousehold(householdAttributes: HouseholdAttributes): Promise<HouseholdInstance> {
    const promise = new Promise<HouseholdInstance>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Household.create(
          householdAttributes,
          {include: [{ model: models.Phone, as: 'phones' }, { model: models.Email, as: 'emails' }]}
          ).then((household: HouseholdInstance) => {
          logger.info(`Created household with address ${householdAttributes.address}.`);
          resolve(household);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  retrieveHousehold(id: string): Promise<HouseholdInstance> {
    const promise = new Promise<HouseholdInstance>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Household.findOne({where: {id: id}}).then((household: HouseholdInstance) => {
          if (household) {
            logger.info(`Retrieved household with id ${id}.`);
          } else {
            logger.info(`Household with id ${id} does not exist.`);
          }
          resolve(household);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

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

  updateHousehold(id: string, householdAttributes: any): Promise<void> {
    const promise = new Promise<void>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Household.update(householdAttributes, {where: {id: id}})
          .then((results: [number, Array<HouseholdInstance>]) => {
            if (results.length > 0) {
              logger.info(`Updated household with id ${id}.`);
            } else {
              logger.info(`Household with id ${id} does not exist.`);
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

  deleteHousehold(id: string): Promise<void> {
    const promise = new Promise<void>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Household.destroy({where: {id: id}}).then((afffectedRows: number) => {
          if (afffectedRows > 0) {
            logger.info(`Deleted household with id ${id}`);
          } else {
            logger.info(`Product with id ${id} does not exist.`);
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

export const householdService = new HouseholdService();
