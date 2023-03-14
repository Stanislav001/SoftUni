import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import page from '../node_modules/page/page.mjs';
import { movieView } from './views/movieView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

//* Attach middlewares
page(authMiddleware);
page(renderMiddleware);

//* Attach page handlers
page('/', homeView);
page('/login', loginView);
page('/logout', logoutView);
page('/register', registerView);
page('/movies/:movieId', movieView);
page('/movies', homeView);

page.start();