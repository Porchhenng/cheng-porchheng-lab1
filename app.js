import express from 'express'; 

const app = express();
// const port = 3000;

app.get('/', (req, res) => {
    res.send('TESTING WORK FLOW TRIGGER');
});

app.get('/walahi', (req, res) => {
    res.send('yoyo');
});

export default app;