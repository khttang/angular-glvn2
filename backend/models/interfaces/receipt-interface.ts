import * as Sequelize from 'sequelize';

export interface ReceiptAttributes {
  id?: number;
  householdId: number;
  receivedFrom: string;
  regReceipt: string;
  emailTo: string;
  emailSent: boolean;
  regExempt: boolean;
  regFee: number;
  receivedBy: string;
  receivedAt?: Date;
  comments: string;
};

export interface ReceiptInstance extends Sequelize.Instance<ReceiptAttributes>, ReceiptAttributes {
};
