import { PaymentRepository } from "../repositories/PaymentRepository";
import {
  PaymentMethod as PrismaPaymentMethod,
  ReservationStatus as PrismaReservationStatus,
} from "@prisma/client";
export class PaymentService {
  constructor(private paymentRepository: PaymentRepository) {}

  async createPayment(
    value: number,
    payment_method: PrismaPaymentMethod,
    status: PrismaReservationStatus,
    user_id: string,
    reserve_id: string
  ) {
    const payment = await this.paymentRepository.createPayment({
      value,
      payment_method,
      status,
      user_id,
      reserve_id,
    });

    return payment;
  }

  async updatePayment(
    id: string,
    data: {
      value?: number;
      payment_method?: PrismaPaymentMethod;
      status?: PrismaReservationStatus;
      user_id?: string;
      reserve_id?: string;
    }
  ) {
    return await this.paymentRepository.updatePayment(id, data);
  }

  async getAllPayments() {
    return await this.paymentRepository.getAllPayments();
  }

  async getPayment(id: string) {
    return await this.paymentRepository.getPayment(id);
  }

  async deletePayment(id: string) {
    return await this.paymentRepository.deletePayment(id);
  }
}
