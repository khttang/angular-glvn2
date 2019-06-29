import * as SequelizeStatic from 'sequelize';
import {DataTypes, Sequelize} from 'sequelize';
import { RegistrationInstance, RegistrationAttributes } from './interfaces/registration-interface';
import { SequelizeAttributes } from '../typings/SequelizeAttributes/types';

export default function (sequelize: Sequelize, dataTypes: DataTypes): SequelizeStatic.Model<RegistrationInstance, RegistrationAttributes> {
  const attributes: SequelizeAttributes<RegistrationAttributes> = {
    id: { type: dataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
    studentId: { type: dataTypes.STRING, allowNull: false },
    year: { type: dataTypes.INTEGER, allowNull: false },
    gradeLevel: { type: dataTypes.INTEGER, allowNull: true },
    glClass: { type: dataTypes.STRING(12), allowNull: true },
    vnClass: { type: dataTypes.STRING(8), allowNull: true },
    glTag: { type: dataTypes.STRING(4), allowNull: true },
    vnTag: { type: dataTypes.STRING(4), allowNull: true },
    status: { type: dataTypes.ENUM('REGISTERED', 'DROPPED', 'APPROVED', 'DENIED'), allowNull: false, defaultValue: 'REGISTERED' },
    receivedBy: { type: dataTypes.STRING(45), allowNull: true },
    reviewedBy: { type: dataTypes.STRING(45), allowNull: true },
    comment: { type: dataTypes.STRING(100), allowNull: true },
    receivedAt: {  type: dataTypes.DATE, allowNull: true },
    reviewedAt: {  type: dataTypes.DATE, allowNull: true }
  };

  const Registration = sequelize.define<RegistrationInstance, RegistrationAttributes>('Registration', attributes);

  return Registration;
};
