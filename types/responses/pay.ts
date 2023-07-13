export interface PaymentListOutput {
  payments: PaymentType[];
}

export type PaymentType = {
  paymentId: number;
  paymentName: string;
};
