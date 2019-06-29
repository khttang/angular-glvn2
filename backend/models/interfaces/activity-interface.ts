import * as Sequelize from 'sequelize';

export enum SUBJECT_TYPE {
  REGISTRATION = 1, HOUSEHOLD, STUDENT, CLASS
}

export enum ACTIVITY_TYPE {
  CREATE = 1, UPDATE, DELETE, REGISTER, DROP, TRANSFER
}

export interface ActivityAttributes {
  id?: number;
  actorId: string;
  actorRole: string;
  subjectId: string;
  subjectType: SUBJECT_TYPE;
  activityType: ACTIVITY_TYPE;
  activityJson: string;
  activityDate?: Date;
}

export interface ActivityInstance extends Sequelize.Instance<ActivityAttributes>, ActivityAttributes {
}
