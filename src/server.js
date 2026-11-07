import express from 'express';
import bookRoutes from './routes/bookRoutes.js';

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(bookRoutes);

app.use((req, res) => res.status(404).type('text/plain; charset=utf-8').send('Not found'));

app.listen(port, () => console.log(`Server running on port ${port}. Press Ctrl+C to stop.`));
