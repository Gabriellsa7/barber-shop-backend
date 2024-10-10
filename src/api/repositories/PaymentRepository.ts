import { IPaymentRepository } from "../interfaces/IPaymentRepository";
import {
  HairCutReservation,
  Payment,
  PrismaClient,
  PaymentMethod as PrismaPaymentMethod,
  ReservationStatus as PrismaReservationStatus,
  User,
} from "@prisma/client";
const prisma = new PrismaClient();

export class PaymentRepository implements IPaymentRepository {
  async createPayment(data: {
    value: number;
    payment_method: PrismaPaymentMethod;
    status: PrismaReservationStatus;
    user_id: string;
    reserve_id: string;
  }): Promise<Payment> {
    return await prisma.payment.create({ data });
  }

  async getAllPayments(): Promise<Payment[]> {
    return await prisma.payment.findMany();
  }

  async getPayment(id: string): Promise<Payment | null> {
    return await prisma.payment.findUnique({ where: { id } });
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
  ): Promise<Payment> {
    return await prisma.payment.update({ where: { id }, data });
  }

  async deletePayment(id: string): Promise<Payment> {
    return await prisma.payment.delete({ where: { id } });
  }

  async getReserveId(reserve_id: string): Promise<HairCutReservation | null> {
    return await prisma.hairCutReservation.findUnique({
      where: { id: reserve_id },
    });
  }

  async getUserId(user_id: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { id: user_id },
    });
  }
}
