import express from "express";
import morgan from "morgan";
import { initDB } from "./utils/db.js";
import authRouter from "./routes/auth.routes.js";
import moviesRouter from "./routes/movies.routes.js";
import { createDefaultAdmin } from "./utils/admin.js";
import reviewsRouter from "./routes/reviews.routes.js";
import watchlistRouter from "./routes/watchlist.routes.js";
/**
 * RUN DATABASE
 */
initDB().then(() => {
  createDefaultAdmin();
});

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get(`/`, (req, res) => {
  res.json({ message: `Wellcome To The Movie API` });
});

app.use(`/api/auth`, authRouter);
app.use(`/api/movies`, moviesRouter);
app.use(`/api/reviews`, reviewsRouter);
app.use(`/api/watchlist`, watchlistRouter);
/**
 * THIS FUNCTION TO RETURN MESSAGE PAGE NOT FOUND I THE USER ASK PAGE NOT EXIST
 */
app.use((req, res) => {
  res.status(404).json({ ERROR: `Page Not Found ` });
});

/**
 * RETURN THIS FUNCTION WEN WE GOTE ERROR IN RUN TIME THE FUNCTIONS
 */
app.use((err, req, res, next) => {
  console.error(`ERROR MASSAGE : `, err.message);
  res.status(500).json({ ERROR: `Somthing Went Wrong` });
});

/**
 * RUNNING PORT
 */
const port = process.env.PORT || 3006;

/**
 * KEEP THE SERVER LIVE
 */
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
