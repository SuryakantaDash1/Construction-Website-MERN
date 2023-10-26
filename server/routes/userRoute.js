import express from 'express'
import { bookVisit, cancelBooking, createUser, getALlFavorites, getAllBookings, toFav } from '../controllers/userController.js'
import jwtCheck from '../config/auth0Config.js';

const router = express.Router()

router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id",jwtCheck, bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id",jwtCheck, cancelBooking);
router.post("/toFav/:rid",jwtCheck, toFav);
router.post("/allFav/",jwtCheck, getALlFavorites);


export {router as userRoute} 