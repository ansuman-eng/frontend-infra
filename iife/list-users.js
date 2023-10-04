(function () {
  const ul = document.getElementById('list');
  User.getUsers().forEach((user, index) => {
    const listItemId = `li=${index}`;
    const deleteButton = document.createElement('button');

    const li = document.createElement('li');

    li.innerHTML = user;
    li.setAttribute('id', listItemId);

    deleteButton.innerHTML = 'X';
    deleteButton.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
})();
