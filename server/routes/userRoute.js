import express from 'express'
import { bookVisit, cancelBooking, createUser, getALlFavorites, getAllBookings, toFav } from '../controllers/userController.js'

const router = express.Router()

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/toFav/:rid", toFav);
router.post("/allFav/", getALlFavorites);


export {router as userRoute} 