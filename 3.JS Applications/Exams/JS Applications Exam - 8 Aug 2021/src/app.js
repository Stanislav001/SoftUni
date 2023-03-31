import page from "../node_modules/page/page.mjs";
import { logout } from "./api/user.js";

import { editView } from "./views/edit.js";
import { myBooksView } from "./views/myBooks.js";
import { loginView } from "./views/login.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { registerView } from "./views/register.js";
import { dashboardView } from "./views/dashboard.js";

import { addRender } from "./middlewares/render.js";
import { addSession } from "./middlewares/session.js";

page(addSession);
page(addRender);

page("/", dashboardView);
page("/mybooks", myBooksView);
page("/login", loginView);
page("/register", registerView);
page("/logout", onLogout);
page("/create", createView);
page("/edit/:id", editView);
page("/details/:id", detailsView);

page.start();

function onLogout() {
  logout();
  page.redirect("/");
}
