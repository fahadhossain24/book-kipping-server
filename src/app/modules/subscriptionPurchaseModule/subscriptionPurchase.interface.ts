import { Document, Types } from 'mongoose';

export interface ISubscriptionPurchase extends Document {
  user: Types.ObjectId;
  subscription: {
    id: Types.ObjectId,
    type: string
  };
  paymentType: string;
  paymentStatus: string;
  paymentSource: {
    number: string;
    tnxId: string;
    type: string;
    name: string;
    isSaved: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}
