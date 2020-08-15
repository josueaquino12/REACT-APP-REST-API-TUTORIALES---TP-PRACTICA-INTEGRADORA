const {Router} = require('express');
const router = Router();

const {getTutoriales, createTutoriales, getTUTORIALByID, deleteTutoriales, updateTutoriales, deleteAllTutoriales} = require('../controllers/controller')

router.get('/api/tutoriales', getTutoriales )
router.get('/api/tutoriales/:id',getTUTORIALByID)
router.post('/api/tutoriales', createTutoriales )
router.delete('/api/tutoriales/:id', deleteTutoriales)
router.put('/api/tutoriales/:id', updateTutoriales)
router.delete('/api/tutoriales', deleteAllTutoriales)


module.exports= router;
