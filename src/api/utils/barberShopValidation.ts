import { error } from "console";
import { prisma } from "../database";

export async function validateBarberShopFields(
  name: string,
  address: string,
  description: string
) {
  const barberShopExist = await prisma.barberShop.findFirst({
    where: { name: name },
  });

  if (!name || !address || !description) {
    return {
      error: true,
      message: "All fields is required",
    };
  }

  if (barberShopExist) {
    return {
      error: true,
      message: "Barbershop with this name already exists",
    };
  }

  return error(false);
}
