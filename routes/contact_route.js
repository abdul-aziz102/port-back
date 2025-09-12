import express from 'express';
import { Contact_from } from '../controller/contactController.js';

const router = express.Router();

// yahan sirf POST / (root) rakho
router.post('/contact', Contact_from);

export default router;
