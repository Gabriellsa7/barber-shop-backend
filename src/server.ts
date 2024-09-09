import Express from "express";
import userRoutes from "./api/routes/userRoutes";

const app = Express();
app.use(Express.json());

const PORT = 8000;

app.get("/api", (req, res) => {
  return res.send({ message: "Hello World"! });
});

app.use(Express.json());
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
