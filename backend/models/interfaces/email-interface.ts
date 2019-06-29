import * as Sequelize from 'sequelize';

export enum EMAIL_TYPE {
  DAD = 1, MOM, STUDENT
}

export enum EMAIL_STATUS {
  VERIFIED = 1, UNKNOWN
}

export interface EmailAttributes {
  id?: number;
  householdId?: number;
  studentId?: number;
  type: EMAIL_TYPE;
  address: string;
  status?: EMAIL_STATUS;
}

export interface EmailInstance extends Sequelize.Instance<EmailAttributes>, EmailAttributes {
}
