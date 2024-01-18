import express from 'express';
import { signUp, signin, signout, tokenRefresh, userDetails } from '../Controllers/user-controller.js';
import multer from 'multer';
import requireSignin  from '../middleware/requireSignin.js';

const router = express.Router();

//configure image upload funtion
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
})

const upload = multer({ storage });

router.post('/signup', upload.single('Picture'), signUp);
router.post('/signin', signin);
router.delete('/signout', signout);
router.post('/Token', tokenRefresh);
router.post('/getUser', requireSignin, userDetails);


export default router