import * as SequelizeStatic from 'sequelize';
import {DataTypes, Sequelize} from 'sequelize';
import { ReceiptInstance, ReceiptAttributes } from './interfaces/receipt-interface';
import { SequelizeAttributes } from '../typings/SequelizeAttributes/types';

export default function (sequelize: Sequelize, dataTypes: DataTypes): SequelizeStatic.Model<ReceiptInstance, ReceiptAttributes> {
  const attributes: SequelizeAttributes<ReceiptAttributes> = {
    id: { type: dataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
    householdId: { type: dataTypes.INTEGER, allowNull: false },
    receivedFrom: { type: dataTypes.STRING(32), allowNull: false },
    regReceipt: { type: dataTypes.STRING(10), allowNull: false },
    emailTo: { type: dataTypes.STRING(45), allowNull: true },
    emailSent: { type: dataTypes.BOOLEAN, allowNull: true },
    regExempt: { type: dataTypes.BOOLEAN, allowNull: true },
    regFee: { type: dataTypes.INTEGER, allowNull: false },
    receivedBy: { type: dataTypes.STRING(45), allowNull: true },
    receivedAt: {  type: dataTypes.DATE, allowNull: false },
    comments: {  type: dataTypes.STRING(100), allowNull: true }
  };

  const Receipt = sequelize.define<ReceiptInstance, ReceiptAttributes>('Receipt', attributes);

  return Receipt;
};
