import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as Cloudinary} from 'cloudinary';

import Image from '../mongodb/models/images.js';

dotenv.config();

const router = express.Router();

export default router;
