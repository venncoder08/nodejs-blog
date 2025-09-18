import express from 'express';
import siteController from '../app/controllers/siteController.js';

const router = express.Router();

// Search
router.use('/search', siteController.search);

// Home
router.use('/', siteController.index);

export default router;
