import { HairCutReservation, Payment, User } from "@prisma/client";
import {
  PaymentMethod as PrismaPaymentMethod,
  ReservationStatus as PrismaReservationStatus,
} from "@prisma/client";

export interface IPaymentRepository {
  createPayment(data: {
    value: number;
    payment_method: PrismaPaymentMethod;
    status: PrismaReservationStatus;
    user_id: string;
    reserve_id: string;
  }): Promise<Payment>;

  getAllPayments(): Promise<Payment[]>;

  getPayment(id: string): Promise<Payment | null>;

  updatePayment(
    id: string,
    data: {
      value?: number;
      payment_method?: PrismaPaymentMethod;
      status?: PrismaReservationStatus;
      user_id?: string;
      reserve_id?: string;
    }
  ): Promise<Payment>;

  deletePayment(id: string): Promise<Payment>;

  getUserId(id: string): Promise<User | null>;

  getReserveId(id: string): Promise<HairCutReservation | null>;
}
