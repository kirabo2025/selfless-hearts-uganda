const API_URL = 'http://localhost:3000/api/items';

async function fetchItems() {
  const res = await fetch(API_URL);
  const items = await res.json();

  const list = document.getElementById('itemList');
  list.innerHTML = '';

  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name + ' ';

    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.onclick = () => deleteItem(item.id);

}

async function addItem() {
  const input = document.getElementById('itemInput');

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: input.value })
  });

  input.value = '';
  fetchItems();
}

async function deleteItem(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  fetchItems();
}

fetchItems();

