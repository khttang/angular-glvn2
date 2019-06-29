import * as Sequelize from 'sequelize';
import {PhoneAttributes, PhoneInstance} from './phone-interface';
import {EmailAttributes, EmailInstance} from './email-interface';
import {StudentAttributes, StudentInstance} from './student-interface';
import {ReceiptAttributes, ReceiptInstance} from './receipt-interface';

export interface HouseholdAttributes {
  id?: number;
  fatherFirst: string;
  fatherLast: string;
  motherFirst: string;
  motherLast: string;
  address: string;
  city: string;
  postalCode: string;
  phones?: PhoneAttributes[] | PhoneAttributes['id'][];
  emails?: EmailAttributes[] | EmailAttributes['id'][];
  students?: StudentAttributes[] | StudentAttributes['id'][];
  receipts?: ReceiptAttributes[] | ReceiptAttributes['id'][];
  createdAt?: Date;
  updatedAt?: Date;
};

export interface HouseholdInstance extends Sequelize.Instance<HouseholdAttributes>, HouseholdAttributes {
  getPhones: Sequelize.HasManyGetAssociationsMixin<PhoneInstance>;
  setPhones: Sequelize.HasManySetAssociationsMixin<PhoneInstance, PhoneInstance['id']>;
  addPhones: Sequelize.HasManyAddAssociationsMixin<PhoneInstance, PhoneInstance['id']>;
  addPhone: Sequelize.HasManyAddAssociationMixin<PhoneInstance, PhoneInstance['id']>;
  createPhone: Sequelize.HasManyCreateAssociationMixin<PhoneInstance, PhoneInstance>;
  removePhone: Sequelize.HasManyRemoveAssociationMixin<PhoneInstance, PhoneInstance['id']>;
  removePhones: Sequelize.HasManyRemoveAssociationsMixin<PhoneInstance, PhoneInstance['id']>;
  hasPhone: Sequelize.HasManyHasAssociationMixin<PhoneInstance, PhoneInstance['id']>;
  hasPhones: Sequelize.HasManyHasAssociationsMixin<PhoneInstance, PhoneInstance['id']>;
  countPhones: Sequelize.HasManyCountAssociationsMixin;

  getEmail: Sequelize.HasManyGetAssociationsMixin<EmailInstance>;
  setEmails: Sequelize.HasManySetAssociationsMixin<EmailInstance, EmailInstance['id']>;
  addEmails: Sequelize.HasManyAddAssociationsMixin<EmailInstance, EmailInstance['id']>;
  addEmail: Sequelize.HasManyAddAssociationMixin<EmailInstance, EmailInstance['id']>;
  createEmail: Sequelize.HasManyCreateAssociationMixin<EmailInstance, EmailInstance>;
  removeEmail: Sequelize.HasManyRemoveAssociationMixin<EmailInstance, EmailInstance['id']>;
  removeEmails: Sequelize.HasManyRemoveAssociationsMixin<EmailInstance, EmailInstance['id']>;
  hasEmail: Sequelize.HasManyHasAssociationMixin<EmailInstance, EmailInstance['id']>;
  hasEmails: Sequelize.HasManyHasAssociationsMixin<EmailInstance, EmailInstance['id']>;
  countEmails: Sequelize.HasManyCountAssociationsMixin;

  getStudent: Sequelize.HasManyGetAssociationsMixin<StudentInstance>;
  setStudents: Sequelize.HasManySetAssociationsMixin<StudentInstance, StudentInstance['id']>;
  addStudents: Sequelize.HasManyAddAssociationsMixin<StudentInstance, StudentInstance['id']>;
  addStudent: Sequelize.HasManyAddAssociationMixin<StudentInstance, StudentInstance['id']>;
  createStudent: Sequelize.HasManyCreateAssociationMixin<StudentInstance, StudentInstance>;
  removeStudent: Sequelize.HasManyRemoveAssociationMixin<StudentInstance, StudentInstance['id']>;
  removeStudents: Sequelize.HasManyRemoveAssociationsMixin<StudentInstance, StudentInstance['id']>;
  hasStudent: Sequelize.HasManyHasAssociationMixin<StudentInstance, StudentInstance['id']>;
  hasStudents: Sequelize.HasManyHasAssociationsMixin<StudentInstance, StudentInstance['id']>;
  countStudents: Sequelize.HasManyCountAssociationsMixin;

  getReceipt: Sequelize.HasManyGetAssociationsMixin<ReceiptInstance>;
  setReceipts: Sequelize.HasManySetAssociationsMixin<ReceiptInstance, ReceiptInstance['id']>;
  addReceipts: Sequelize.HasManyAddAssociationsMixin<ReceiptInstance, ReceiptInstance['id']>;
  addReceipt: Sequelize.HasManyAddAssociationMixin<ReceiptInstance, ReceiptInstance['id']>;
  createReceipt: Sequelize.HasManyCreateAssociationMixin<ReceiptInstance, ReceiptInstance>;
  removeReceipt: Sequelize.HasManyRemoveAssociationMixin<ReceiptInstance, ReceiptInstance['id']>;
  removeReceipts: Sequelize.HasManyRemoveAssociationsMixin<ReceiptInstance, ReceiptInstance['id']>;
  hasReceipt: Sequelize.HasManyHasAssociationMixin<ReceiptInstance, ReceiptInstance['id']>;
  hasReceipts: Sequelize.HasManyHasAssociationsMixin<ReceiptInstance, ReceiptInstance['id']>;
  countReceipts: Sequelize.HasManyCountAssociationsMixin;
};
