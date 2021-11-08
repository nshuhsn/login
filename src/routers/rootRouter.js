import  express  from "express";
import { home, search } from "../controllers/videoController";
import { postJoin, getJoin,login } from "../controllers/userController"

const rootRouter = express.Router();

rootRouter.get("/",home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login",login);


export default rootRouter;