import * as Sequelize from 'sequelize';
import {RegistrationAttributes, RegistrationInstance} from './registration-interface';

export enum GENDER_TYPE {
  MALE = 1, FEMALE
}

export enum STUDENT_STATUS {
  ACTIVE = 1, INACTIVE
}

export interface StudentAttributes {
  id?: number;
  saintName: string,
  firstName: string;
  lastName: string;
  middleName: string;
  gender: GENDER_TYPE;
  dob: Date;
  vnClass: string;
  vnTag: string;
  glClass: string;
  glTag: string;
  baptismCertUri: string;
  communionCertUri: string;
  confirmationCertUri: string;
  baptismDate: Date;
  communionDate: Date;
  confirmationDate: Date;
  status?: STUDENT_STATUS;
  registrations?: RegistrationAttributes[] | RegistrationAttributes['id'][];
  createdAt?: Date;
  updatedAt?: Date;
};

export interface StudentInstance extends Sequelize.Instance<RegistrationAttributes>, RegistrationAttributes {
  getRegistration: Sequelize.HasManyGetAssociationsMixin<RegistrationInstance>;
  setRegistrations: Sequelize.HasManySetAssociationsMixin<RegistrationInstance, RegistrationInstance['id']>;
  addRegistrations: Sequelize.HasManyAddAssociationsMixin<RegistrationInstance, RegistrationInstance['id']>;
  addRegistration: Sequelize.HasManyAddAssociationMixin<RegistrationInstance, RegistrationInstance['id']>;
  createRegistration: Sequelize.HasManyCreateAssociationMixin<RegistrationInstance, RegistrationInstance>;
  removeRegistration: Sequelize.HasManyRemoveAssociationMixin<RegistrationInstance, RegistrationInstance['id']>;
  removeRegistrations: Sequelize.HasManyRemoveAssociationsMixin<RegistrationInstance, RegistrationInstance['id']>;
  hasRegistration: Sequelize.HasManyHasAssociationMixin<RegistrationInstance, RegistrationInstance['id']>;
  hasRegistrations: Sequelize.HasManyHasAssociationsMixin<RegistrationInstance, RegistrationInstance['id']>;
  countRegistrations: Sequelize.HasManyCountAssociationsMixin;
};
