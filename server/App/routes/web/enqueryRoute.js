let express = require('express');
const { enqueryInsert, enqueryList, enqueryDelete, enqueryUpdate } = require('../../controller/web/enqueryController');
let enqueryRouter = express.Router();

enqueryRouter.post('/insert',enqueryInsert);
enqueryRouter.get('/list',enqueryList);
enqueryRouter.delete('/delete/:id',enqueryDelete);
enqueryRouter.put('/update/:id',enqueryUpdate);



module.exports = enqueryRouter;  