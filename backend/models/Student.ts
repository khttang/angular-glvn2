import * as SequelizeStatic from 'sequelize';
import {DataTypes, Sequelize} from 'sequelize';
import { StudentInstance, StudentAttributes } from './interfaces/student-interface';
import { SequelizeAttributes } from '../typings/SequelizeAttributes/types';

export default function (sequelize: Sequelize, dataTypes: DataTypes): SequelizeStatic.Model<StudentInstance, StudentAttributes> {
  const attributes: SequelizeAttributes<StudentAttributes> = {
    id: { type: dataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
    saintName: { type: dataTypes.STRING(20), allowNull: true },
    firstName: { type: dataTypes.STRING(16), allowNull: false },
    lastName: { type: dataTypes.STRING(16), allowNull: false },
    middleName: { type: dataTypes.STRING(16), allowNull: true },
    gender: { type: dataTypes.ENUM('MALE', 'FEMALE'), allowNull: false },
    dob: { type: dataTypes.DATE, allowNull: false },
    vnClass: { type: dataTypes.STRING(8), allowNull: true },
    vnTag: { type: dataTypes.STRING(4), allowNull: true },
    glClass: { type: dataTypes.STRING(12), allowNull: true },
    glTag: { type: dataTypes.STRING(4), allowNull: true },
    baptismCertUri: { type: dataTypes.STRING(100), allowNull: true },
    communionCertUri: { type: dataTypes.STRING(100), allowNull: true },
    confirmationCertUri: { type: dataTypes.STRING(100), allowNull: true },
    baptismDate: { type: dataTypes.DATE, allowNull: true },
    communionDate: { type: dataTypes.DATE, allowNull: true },
    confirmationDate: { type: dataTypes.DATE, allowNull: true },
    status: { type: dataTypes.ENUM('ACTIVE', 'INACTIVE'), allowNull: false, defaultValue: 'ACTIVE'},
    createdAt: {  type: dataTypes.DATE, allowNull: true, defaultValue: Sequelize.NOW },
    updatedAt: {  type: dataTypes.DATE, allowNull: true, defaultValue: Sequelize.NOW }
  };

  const Student = sequelize.define<StudentInstance, StudentAttributes>('Student', attributes);

  return Student;
};
