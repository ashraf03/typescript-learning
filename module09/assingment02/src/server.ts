import config from "./config";
import { initDB } from "./db";
import app from "./db/app";
import { userRoute } from "./modules/user/user.route";

app.use("/api/auth", userRoute)

const main = () => {
  initDB();

  app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})
}

main();