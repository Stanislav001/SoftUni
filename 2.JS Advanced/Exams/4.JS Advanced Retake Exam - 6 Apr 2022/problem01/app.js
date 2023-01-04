window.addEventListener("load", solve);

function solve() {
  const titlePostElement = document.getElementById('post-title');
  const postCategoryElement = document.getElementById('post-category');
  const postContentElement = document.getElementById('post-content');
  const listOfReviewElements = document.getElementById('review-list');
  const listOfPublishElements = document.getElementById('published-list');

  const clearButton = document.getElementById('clear-btn');
  const publishButton = document.getElementById('publish-btn');

  publishButton.addEventListener('click', (e) => {
    e.preventDefault();

    const title = titlePostElement.value;
    const category = postCategoryElement.value;
    const content = postContentElement.value;

    if (!title || !category || !content) {
      return;
    }

    const currentPostElement = document.createElement('li');

    currentPostElement.className = 'rpost';
    currentPostElement.innerHTML = `
      <article>
        <h4>${title}</h4>
        <p>Category: ${category}</p>
        <p>Content: ${content}</p>
      </article>
      <button class="action-btn edit">Edit</button>
      <button class="action-btn approve">Approve</button>`;

    const editButton = currentPostElement.querySelector('.edit');
    const approveButton = currentPostElement.querySelector('.approve');
    
    listOfReviewElements.appendChild(currentPostElement);

    titlePostElement.value = '';
    postCategoryElement.value = '';
    postContentElement.value = '';

    editButton.addEventListener('click', () => {
      titlePostElement.value = title;
      postCategoryElement.value = category;
      postContentElement.value = content;
      
      listOfReviewElements.removeChild(currentPostElement);
    });

    approveButton.addEventListener('click', () => {
      currentPostElement.removeChild(editButton);
      currentPostElement.removeChild(approveButton);
      listOfPublishElements.appendChild(currentPostElement);
    });
  });

  clearButton.addEventListener('click', (e) => {
    listOfPublishElements.innerHTML = '';
  });
}