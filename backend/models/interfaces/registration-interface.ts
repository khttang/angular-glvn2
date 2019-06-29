import * as Sequelize from 'sequelize';

export enum REGISTRATION_STATUS {
  REGISTERED = 1, DROPPED, APPROVED, DENIED
}

export interface RegistrationAttributes {
  id?: number;
  studentId: string;
  year: number;
  gradeLevel: number;
  glClass: string;
  vnClass: string;
  glTag: string;
  vnTag: string;
  status: REGISTRATION_STATUS;
  receivedBy: string;
  reviewedBy: string;
  comment: string;
  receivedAt: Date;
  reviewedAt: Date;
};

export interface RegistrationInstance extends Sequelize.Instance<RegistrationAttributes>, RegistrationAttributes {
};
