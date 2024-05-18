const UserRouter = require("./UserRouter");
const AuthRouter = require("./AuthRouter");
const routes = (app) => {
  app.use("/api/user", UserRouter);
};
module.exports = routes;
