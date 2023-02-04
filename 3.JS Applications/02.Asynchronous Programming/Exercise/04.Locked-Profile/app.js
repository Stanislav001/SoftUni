async function lockedProfile() {
    const main = document.getElementById('main');

    const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');

    if (!response.ok) {
        return alert('Error!');
    }

    const profilesData = Object.values(await response.json());

    profilesData.forEach(profile => {
        createProfileCard(profile);
    });
    
    function createProfileCard(profileData) {
        const div = document.createElement('div');
        div.classList.add('profile');
        div.innerHTML = ` 
			<img src="./iconProfile2.png" class="userIcon" />
			<label>Lock</label>
			<input type="radio" name="user1Locked" value="lock" checked>
			<label>Unlock</label>
			<input type="radio" name="user1Locked" value="unlock"><br>
			<hr>
			<label>username</label>
			<input type="text" name="user1Username" value="${profileData.username}" disabled readonly />
			<div class="user1HiddenFields">
				<hr>
				<label>Email:</label>
				<input type="email" name="user1Email" value="${profileData.email}" disabled readonly />
				<label>Age:</label>
				<input type="email" name="user1Age" value="${profileData.age}" disabled readonly />
			</div>
			<button>Show more</button>		
        `;

        main.appendChild(div);

        const showMoreButton = div.querySelector('button');
        showMoreButton.addEventListener('click', showMore);
        const more = div.querySelector('div');
        more.style.display = 'none';

        return div;

        function showMore(e) {
            const profile = e.target.parentElement;
            const isLocked = profile.querySelector('input').checked;

            if (!isLocked) {
                if (showMoreButton.textContent == 'Show more') {
                    more.style.display = 'block';
                    showMoreButton.textContent = 'Hide it';
                } else {
                    more.style.display = 'none';
                    showMoreButton.textContent = 'Show more';
                }
            }
        }
    }
}