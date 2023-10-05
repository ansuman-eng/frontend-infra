const ul = document.getElementById('list');
users.forEach((user, idx) => {
  const userItemId = `li-${idx}`;

  const li = document.createElement('li');
  li.setAttribute('id', userItemId);
  li.innerHTML = user;

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'X';
  deleteButton.addEventListener('click', () => {
    ul.removeChild(li);
  });

  li.appendChild(deleteButton);
  ul.appendChild(li);
});
