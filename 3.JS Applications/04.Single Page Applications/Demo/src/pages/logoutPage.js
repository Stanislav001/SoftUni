import { logoutHandler } from "../auth.js";


export function renderLogout() {
    logoutHandler();
    alert('Successful logout!');
}