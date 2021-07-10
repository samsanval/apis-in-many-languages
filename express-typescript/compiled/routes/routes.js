'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const BookController_1 = __importDefault(require("../controllers/BookController"));
const router = express_1.default.Router();
exports.router = router;
const bookController = new BookController_1.default();
router.get('/', bookController.greet);
router.get('/books', bookController.getAll);
router.get('/book/:title', bookController.getByTitle);
router.post('/new-book', bookController.save);
