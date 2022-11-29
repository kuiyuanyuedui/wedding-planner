import express from "express";
import myDB from "../db/MyMongo.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/getUserTasks/:userid", async function (req, res, next) {
  let tasks;
  const userid = req.params.userid;
  console.log(userid);
  try {
    tasks = await myDB.getTasks(userid);
    res.status(200).json({ tasks, msg: "Query successful" });
  } catch (e) {
    console.log("Error in db", e);
    res.status(300).json({
      tasks: [],
      msg: "Error in the query",
      error: true,
      errorObj: JSON.stringify(e),
    });
  }
});

export default router;
