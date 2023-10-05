import express from 'express';
import bodyParser from 'body-parser';

import { router } from './controllers/controller';

const app = express();
const port = 3000;


app.use(bodyParser.json({ type: 'application/json' })) // TODO: NO ANDA ESTO
app.use('/', router);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
