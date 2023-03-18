import { html } from "../../node_modules/lit-html/lit-html.js";
import * as commentService from "../api/commentsService.js";
import { createSubmitHandler } from "../util.js";

// 2.54
const commentCard = (comment) => html`
  <li class="comment">
    <p>Content: ${comment.comment}</p>
  </li>
`;

const commentsList = (comments) => html` <ul>
  ${comments.map(commentCard)}
</ul>`;

const commentsTemplate = (comments) => html`
  <div class="details-comments">
    <h2>Comments:</h2>

    ${comments.length > 0
      ? commentsList(comments)
      : html` <p class="no-comment">No comments.</p> `}
  </div>
`;

export async function commentsView(gameId) {
  const comments = await commentService.getByGameId(gameId);
  console.log(comments);
  return commentsTemplate(comments);
}
