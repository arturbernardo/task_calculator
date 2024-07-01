import Koa from 'koa';
import mount from 'koa-mount';
import views from 'koa-views';
import config from './configs/config';

import { router as calcDashRoutes } from './controllers/dashboard_controller';
import { router as taskRoutes } from './controllers/task_controller';

const PORT = config.PORT
const app = new Koa();

app.use(views(__dirname + '/views', {
    extension: 'ejs'
  }));

app.use(mount('/dashboard', calcDashRoutes.routes()));
app.use(mount('/task', taskRoutes.routes()));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});