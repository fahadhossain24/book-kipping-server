import express from 'express';
import faqControllers from './faq.controllers';
import authorization from '../../middlewares/authorization';

const faqRouter = express.Router();

// Route to create new faq (only accessible to admin or super-admin)
faqRouter.post('/create', authorization('super-admin', 'admin'), faqControllers.createNewFaq);

// Route to retrieve faq (accessible to everyone)
faqRouter.get('/retrive', faqControllers.getAllFaq);

// Route to delete specific faq (only accessible to admin or super-admin)
faqRouter.delete('/delete/:id', authorization('super-admin', 'admin'), faqControllers.deleteSpecificFaq);

// route for updated specific faq
faqRouter.patch('/update/:id', authorization('super-admin', 'admin'), faqControllers.updateSpecificFaq);

export default faqRouter;
