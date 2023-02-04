async function solution() {
    const mainElement = document.getElementById('main');

    const data = await getData();

    if (data) {
        data.forEach(el => {
            createElement(el);
        });

    } else {
        alert('Error!')
    }

    async function getData() {
        const result = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
        const data = await result.json();
        return data;
    }

    async function createElement(element) {
        console.log(element);
        const div = document.createElement('div');
        div.className = 'accordion'
        div.innerHTML = `
            <div class="head">
                <span>${element.title}</span>
                <button class="button" id="${element._id}">More</button>
            </div>
        `;

        mainElement.appendChild(div);

        const moreInfoData = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${element._id}`);
        const moreData = await moreInfoData.json();

        const content = document.createElement('div');
        content.className = 'extra';
        content.innerHTML = `<p>${moreData.content}</p>`;

        const moreButton = div.querySelector('.button');
        moreButton.addEventListener('click', showMore);

        div.appendChild(content);
        return div;

        function showMore(e) {
            if (moreButton.textContent === 'More') {
                moreButton.textContent = 'Less';
                content.style.display = 'block'
            } else {
                moreButton.textContent = 'More';
                content.style.display = 'none';
            }
        }
    }
}


window.onload = solution();