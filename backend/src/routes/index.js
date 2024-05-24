const UserRouter = require("./UserRouter");
const CourseRouter = require("./CourseRouter");
const routes = (app) => {
  app.use("/api/user", UserRouter);
  app.use("/api/course", CourseRouter);
};
module.exports = routes;
