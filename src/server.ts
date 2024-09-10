import Express from "express";
import userRoutes from "./api/routes/userRoutes";
import barberShopRoutes from "./api/routes/barberShopRoutes";

const app = Express();
app.use(Express.json());

const PORT = 8000;

app.get("/api", (req, res) => {
  return res.send({ message: "Hello World"! });
});

app.use(Express.json());
app.use("/api", userRoutes);
app.use("/api", barberShopRoutes);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
