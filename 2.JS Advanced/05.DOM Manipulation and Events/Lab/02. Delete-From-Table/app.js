function deleteByEmail() {
    // select input field and read value
    const value = document.querySelector('input[name="email"]').value;

    // repeat for every table row
    // - select second column
    // - compare text content with input value
    // - if they are equal -> remove current row
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    let found = false;

    for (const row of rows) {
        if (row.children[1].textContent == value) {
            row.remove();
            found = true;
        }
    }

    // display result
    document.getElementById('result').textContent = found ? 'Deleted.' : 'Not found.';
}