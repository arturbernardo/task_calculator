import Koa from 'koa';
import mount from 'koa-mount';
import koa_static from 'koa-static';
import views from 'koa-views';
import config from './configs/config';

import { router as calcDashRoutes } from './controllers/dashboard_controller';
import job from './jobs/periodic_task';

const PORT = config.PORT
const app = new Koa();

app.use(koa_static(__dirname + '/public'));
app.use(views(__dirname + '/views', {
    extension: 'ejs'
  }));

app.use(mount('/dashboard', calcDashRoutes.routes()));

job.start();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
