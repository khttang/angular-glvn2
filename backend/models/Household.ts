import * as SequelizeStatic from 'sequelize';
import {DataTypes, Sequelize} from 'sequelize';
import { HouseholdInstance, HouseholdAttributes } from './interfaces/household-interface';
import { SequelizeAttributes } from '../typings/SequelizeAttributes/types';

export default function (sequelize: Sequelize, dataTypes: DataTypes): SequelizeStatic.Model<HouseholdInstance, HouseholdAttributes> {
  const attributes: SequelizeAttributes<HouseholdAttributes> = {
    id: { type: dataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
    fatherFirst: { type: dataTypes.STRING(16), allowNull: true },
    fatherLast: { type: dataTypes.STRING(16), allowNull: true },
    motherFirst: { type: dataTypes.STRING(16), allowNull: true },
    motherLast: { type: dataTypes.STRING(16), allowNull: true },
    address: { type: dataTypes.STRING(64), allowNull: false },
    city: { type: dataTypes.STRING(16), allowNull: false },
    postalCode: { type: dataTypes.STRING(10), allowNull: false },
    createdAt: {  type: dataTypes.DATE, allowNull: true, defaultValue: Sequelize.NOW },
    updatedAt: {  type: dataTypes.DATE, allowNull: true, defaultValue: Sequelize.NOW }
  };

  const Household = sequelize.define<HouseholdInstance, HouseholdAttributes>('Household', attributes);
  Household.associate = models => {
    Household.hasMany(models.Phone, {foreignKey: 'householdId', as: 'phones'});
    Household.hasMany(models.Email, {foreignKey: 'householdId', as: 'emails'});
  };
  return Household;
};








