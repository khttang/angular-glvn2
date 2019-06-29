import * as Sequelize from 'sequelize';

export enum PHONE_TYPE {
  DAD = 1, MOM, STUDENT, EMERGENCY
}

export enum PHONE_STATUS {
  VERIFIED = 1, UNKNOWN
}

export interface PhoneAttributes {
  id?: number;
  householdId?: number;
  studentId?: string;
  type: PHONE_TYPE;
  number: string;
  status?: PHONE_STATUS;
  emergencyContact?: string;
}

export interface PhoneInstance extends Sequelize.Instance<PhoneAttributes>, PhoneAttributes {
}
