import Express from "express";
import userRoutes from "./api/routes/userRoutes";
import barberShopRoutes from "./api/routes/barberShopRoutes";
import hairCutRoutes from "./api/routes/hairCutRoutes";
import barberServiceRoutes from "./api/routes/barberServiceRoutes";
import hairCutReservationRoutes from "./api/routes/hairCutReservationRoutes";
import paymentRoutes from "./api/routes/paymentRoutes";
import authenticationRoutes from "./api/routes/authenticationRoutes";
const app = Express();
app.use(Express.json());

const PORT = 8000;

app.get("/api", (req, res) => {
  return res.send({ message: "Hello World"! });
});

app.use(Express.json());
app.use("/api", userRoutes);
app.use("/api", barberShopRoutes);
app.use("/api", hairCutRoutes);
app.use("/api", barberServiceRoutes);
app.use("/api", hairCutReservationRoutes);
app.use("/api", paymentRoutes);
app.use("/api/auth", authenticationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
