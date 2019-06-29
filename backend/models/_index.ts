// https://vivacitylabs.com/setup-typescript-sequelize/
import * as cls from 'continuation-local-storage';
import * as fs from 'fs';
import * as path from 'path';
import * as SequelizeStatic from 'sequelize';
import { Sequelize } from 'sequelize';
import {HouseholdAttributes, HouseholdInstance} from './interfaces/household-interface';
import {EmailInstance, EmailAttributes} from './interfaces/email-interface';
import {PhoneInstance, PhoneAttributes} from './interfaces/phone-interface';
import {ReceiptInstance, ReceiptAttributes} from './interfaces/receipt-interface';
import {RegistrationInstance, RegistrationAttributes} from './interfaces/registration-interface';
import {StudentInstance, StudentAttributes} from './interfaces/student-interface';
import {ActivityInstance, ActivityAttributes} from './interfaces/activity-interface';


export interface SequelizeModels {
  Household: SequelizeStatic.Model<HouseholdInstance, HouseholdAttributes>;
  Email: SequelizeStatic.Model<EmailInstance, EmailAttributes>;
  Phone: SequelizeStatic.Model<PhoneInstance, PhoneAttributes>;
  Receipt: SequelizeStatic.Model<ReceiptInstance, ReceiptAttributes>;
  Registration: SequelizeStatic.Model<RegistrationInstance, RegistrationAttributes>;
  Student: SequelizeStatic.Model<StudentInstance, StudentAttributes>;
  Activity: SequelizeStatic.Model<ActivityInstance, ActivityAttributes>;
}

class Database {
  private _basename: string;
  private _models: SequelizeModels;
  private _sequelize: Sequelize;

  constructor() {
    this._basename = path.basename(module.filename);
    const env = process.env.NODE_ENV || 'development';
    const dbConfig = require(__dirname + '/../config/config.json')[env];

    (SequelizeStatic as any).cls = cls.createNamespace('sequelize-transaction');
    this._sequelize = new SequelizeStatic(dbConfig.database, dbConfig.username,
      dbConfig.password, dbConfig);
    this._models = ({} as any);

    fs.readdirSync(__dirname).filter((file: string) => {
      return (file !== this._basename) && (file !== 'interfaces');
    }).forEach((file: string) => {
      const model = this._sequelize.import(path.join(__dirname, file));
      this._models[(model as any).name] = model;
    });

    Object.keys(this._models).forEach((modelName: string) => {
      if (typeof this._models[modelName].associate === 'function') {
        this._models[modelName].associate(this._models);
      }
    });

    Object.keys(this._models).forEach(modelName => {
      if (this._models[modelName].associate) {
        this._models[modelName].associate(this._models);
      }
    });
  }

  getModels() {
    return this._models;
  }

  getSequelize() {
    return this._sequelize;
  }
}

const database = new Database();
export const models = database.getModels();
export const sequelize = database.getSequelize();


