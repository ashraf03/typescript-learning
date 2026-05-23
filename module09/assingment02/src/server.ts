import config from "./config";
import { initDB } from "./db";
import app from "./db/app";
import { authRoute } from "./modules/auth/auth.route";
import { userRoute } from "./modules/user/user.route";

app.use("/api/auth", userRoute)
app.use("/api/auth", authRoute)

const main = () => {
  initDB();

  app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})
}

main();