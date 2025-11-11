import express from 'express'; 

const app = express();
// const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, GitHub Actions!');
});

export default app;