require("module-alias/register");
const express = require("express");
const cors = require('cors');

const connectDB = require("@config/db");
const app = express();

// Connect to Database
connectDB();

app.use(cors( {
  origin: "*",
}));

app.use(express.json());
app.use(express.static("public"));

// app.get('/api', (req, res) => {
//   res.json({ message: "CORS enabled" });
// });

// routes
const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoute");

app.use("/api/users", userRoutes);
app.use("/api/properties", propertyRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT} 🚀`);
});
