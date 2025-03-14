let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
const enqueryRouter = require('./App/routes/web/enqueryRoute');
require('dotenv').config();

let app = express();

app.use(cors());

app.use(express.json());

// Routes
app.use('/web/enquery', enqueryRouter);







// Connect to MongoDB
mongoose.connect(process.env.URLDB).then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(3000, () => {
        console.log('Server started at '+process.env.PORT);
    });
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

