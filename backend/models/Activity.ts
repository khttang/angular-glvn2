import * as SequelizeStatic from 'sequelize';
import {DataTypes, Sequelize} from 'sequelize';
import { ActivityInstance, ActivityAttributes } from './interfaces/activity-interface'
import { SequelizeAttributes } from '../typings/SequelizeAttributes/types';

export default function (sequelize: Sequelize, dataTypes: DataTypes): SequelizeStatic.Model<ActivityInstance, ActivityAttributes> {
  const attributes: SequelizeAttributes<ActivityAttributes> = {
    id: { type: dataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
    actorId: { type: dataTypes.STRING(64), allowNull: false },
    actorRole: { type: dataTypes.STRING(64), allowNull: false },
    subjectId: { type: dataTypes.STRING (11), allowNull: false },
    subjectType: { type: dataTypes.ENUM('REGISTRATION', 'HOUSEHOLD', 'STUDENT', 'CLASS'), allowNull: false },
    activityType: { type: dataTypes.ENUM('CREATE', 'UPDATE', 'DELETE', 'REGISTER', 'DROP', 'TRANSFER'), allowNull: false },
    activityJson: { type: dataTypes.STRING(1048), allowNull: false },
    activityDate: { type: dataTypes.DATE, allowNull: false }
  };

  const Activity = sequelize.define<ActivityInstance, ActivityAttributes>('Activity', attributes);
  return Activity;
};
