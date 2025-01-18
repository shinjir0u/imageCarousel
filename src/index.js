import ScreenController from "./screenController";
import SlideController from "./slideController";
import "./css/style.css";

const screenController = new ScreenController(new SlideController());
screenController.activateScreenController();