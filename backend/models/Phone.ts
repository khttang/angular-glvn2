import * as SequelizeStatic from 'sequelize';
import {DataTypes, Sequelize} from 'sequelize';
import {PHONE_STATUS, PhoneAttributes, PhoneInstance} from './interfaces/phone-interface';
import {SequelizeAttributes} from '../typings/SequelizeAttributes/types';

export default function (sequelize: Sequelize, dataTypes: DataTypes): SequelizeStatic.Model<PhoneInstance, PhoneAttributes> {
  const attributes: SequelizeAttributes<PhoneAttributes> = {
    id: { type: dataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
    householdId: { type: dataTypes.INTEGER, allowNull: false },
    studentId: { type: dataTypes.STRING(16), allowNull: true },
    type: { type: dataTypes.ENUM('DAD', 'MOM', 'STUDENT', 'EMERGENCY'), allowNull: false },
    number: { type: dataTypes.STRING(10), allowNull: false },
    status: { type: dataTypes.ENUM('VERIFIED', 'UNKNOWN'), allowNull: false, defaultValue: 'UNKNOWN' },
    emergencyContact: { type: dataTypes.STRING(45), allowNull: true }
  };

  const Phone = sequelize.define<PhoneInstance, PhoneAttributes>('Phone', attributes);

  return Phone;
};
