let express = require('express');
const { enqueryInsert, enqueryList, enqueryDelete, enqueryUpdate } = require('../controller/userEnqueryController');
let enqueryRoutes = express.Router();


enqueryRoutes.post('/enquery-insert',enqueryInsert);

enqueryRoutes.get('/enquery-list',enqueryList);

enqueryRoutes.delete('/enquery-del/:id',enqueryDelete);

enqueryRoutes.put('/enquery-update/:id',enqueryUpdate);

module.exports=enqueryRoutes;