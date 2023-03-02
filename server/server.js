const PORT = 8000;
const express = require("express");
const pool = require("./db");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://127.0.0.1:5173" }));
app.use(express.json());

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//Assets
app.get("/assets", async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM assets");
    res.json(response.rows);
  } catch (error) {
    console.error(error);
  }
});

app.post("/assets/post", async (req, res) => {
  try {
  } catch (error) {}
});

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
