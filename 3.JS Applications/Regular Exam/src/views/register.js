import * as userService from "../api/user.js";
import { createSubmitHandler } from "../util.js";
import { html } from "../../node_modules/lit-html/lit-html.js";

const registerTemplate = (onSubmit) => html`
    <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${onSubmit} class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
          </div>
        </section>
`;

export function registerView(ctx) {
  ctx.render(registerTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit({ email, password, 're-password': rePass }, form) {
      if (email == '' || password == '') {
          return alert('All fields are required')
      }
      if (password != rePass) {
          return alert('Password don\'t match')
      }
      await userService.register(email, password);
      form.reset();

      ctx.page.redirect('/')
  }
}