import page from './node_modules/page/page.mjs';

import { homeView } from './views/home.js';
import { aboutView } from './views/about.js';
import { articlesView } from './views/articles.js';
import articleDetailsView from './views/articleDetails.js';
import { createView } from './views/create.js';

page('/home', homeView);
page('/about', aboutView);
page('/create', createView);
page('/articles', articlesView);
page('/articles/:articleId', articleDetailsView);

page.start();