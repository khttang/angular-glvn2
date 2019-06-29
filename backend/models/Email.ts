import * as SequelizeStatic from 'sequelize';
import {DataTypes, Sequelize} from 'sequelize';
import {EmailInstance, EmailAttributes, EMAIL_STATUS} from './interfaces/email-interface';
import { SequelizeAttributes } from '../typings/SequelizeAttributes/types';

export default function (sequelize: Sequelize, dataTypes: DataTypes): SequelizeStatic.Model<EmailInstance, EmailAttributes> {
  const attributes: SequelizeAttributes<EmailAttributes> = {
    id: { type: dataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
    householdId: { type: dataTypes.INTEGER, allowNull: false },
    studentId: { type: dataTypes.STRING(16), allowNull: true },
    type: { type: dataTypes.ENUM('DAD', 'MOM', 'STUDENT'), allowNull: false },
    address: { type: dataTypes.STRING(45), allowNull: false },
    status: { type: dataTypes.ENUM('VERIFIED', 'UNKNOWN'), allowNull: false, defaultValue: 'UNKNOWN' }
  };

  const Email = sequelize.define<EmailInstance, EmailAttributes>('Email', attributes);
  return Email;
};
