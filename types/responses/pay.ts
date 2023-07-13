export interface PaymentListOutput {
  payments: PaymentType[];
}

export type PaymentType = {
  paymentId: number;
  paymentName: string;
};

export interface NewPayInput {
  payment_name: string;
  card_number: string;
  expiry: string;
  birth: string;
  pwd_2digit: string;
}

export interface NewPayOutput {
  payment_name: string;
  customer_uid: string;
  code: string;
  describe: string;
}
