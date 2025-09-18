import express from 'express';
import newsController from '../app/controllers/newsController.js';

const router = express.Router();

// Slug
router.use('/:slug', newsController.show);

// Index
router.use('/', newsController.index);

export default router;
