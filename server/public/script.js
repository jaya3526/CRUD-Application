document.addEventListener('DOMContentLoaded', function () {
    fetchItem();
});

function fetchItem() {
    fetch('/items', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            var table = document.querySelector('table tbody');
            var tablerow = document.querySelectorAll('table tbody tr');
            for (let i = tablerow.length - 1; i > 0; i--) {
                table.removeChild(tablerow[i]);
            }
            for (let i = 0; i < data.length; i++) {
                var row = document.createElement('tr');
                row.id = data[i]._id;
                row.innerHTML = `<td>${data[i].name}</td>
                <td>${data[i].price}$</td>
                <td>${data[i].category}</td>
                <td>${data[i].brand}</td>
                <td>${data[i].weight}g</td>
                <td>${data[i].color}</td>
                <td><button onclick='editItem("${data[i]._id}")'><i class='fas fa-pen' id="editIcon"></i></button></td>
                <td><button onclick='deleteItem("${data[i]._id}")'><i class='fa fa-close' id="deleteIcon"></i></button></td>
                <td><button onclick='viewItem("${data[i]._id}")'><i class='fa fa-search' id="viewIcon"></i></button></td>`;
                if (i % 2 !== 0) {
                    row.style.backgroundColor = 'rgb(219,219,219)';
                }
                table.appendChild(row);
            }
        }).catch((err) => {
            console.error('Error while fetching the data', err);
        });
}

function addNewUser() {
    document.querySelector('.addUser').style.display = 'block';
    document.querySelector('.main').style.filter = 'blur(8px)';
    document.querySelector('.addUserForm').reset();
    document.querySelector('.addUserForm').onsubmit = (e) => {
        e.preventDefault();
        addItem();
    }
}

function cancelItem() {
    document.querySelector('.addUser').style.display = 'none';
    document.querySelector('.main').style.filter = '';
}

function cancelEditItem() {
    document.querySelector('.editUser').style.display = 'none';
    document.querySelector('.main').style.filter = '';
}

function addItem() {
    var result = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price:document.getElementById('price').value,
        category: document.getElementById('category').value,
        quantity: Number(document.getElementById('quantity').value),
        brand: document.getElementById('brand').value,
        weight: Number(document.getElementById('weight').value),
        color: document.getElementById('color').value
    }
    console.log(result);
    fetch('/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result)
    }).then(res => res.json())
        .then(() => {
            alert('Data inserted successfully');
            cancelItem();
            fetchItem();
        }).catch(err => {
            console.log('Error while adding the data', err);
        });
}

function deleteItem(id) {
    fetch(`/items/${id}`, {
        method: 'DELETE'
    }).then(() => {
        alert('Data deleted successfully');
        fetchItem();
    }).catch(err => console.error('Error while deleting the data', err));
}

function editItem(id) {
    document.querySelector('.editUser').style.display = 'block';
    document.querySelector('.main').style.filter = 'blur(8px)';
    fetch(`/items/${id}`, {
        method: 'GET'
    }).then(res => res.json())
        .then(data => {
            data = data[0];
            console.log(data);
            document.getElementById('ename').value = data.name;
            document.getElementById('edescription').value = data.description;
            document.getElementById('eprice').value = data.price;
            document.getElementById('ecategory').value = data.category;
            document.getElementById('equantity').value = data.quantity;
            document.getElementById('ebrand').value = data.brand;
            document.getElementById('eweight').value = data.weight;
            document.getElementById('ecolor').value = data.color;
        }).catch(err => {
            console.error('Data was not edited', err);
        });

    document.querySelector('.editUserForm').onsubmit = (e) => {
        e.preventDefault();
        updateItem(id);
    }
}

function updateItem(id) {
    var result = {
        name: document.getElementById('ename').value,
        description: document.getElementById('edescription').value,
        price: document.getElementById('eprice').value,
        category: document.getElementById('ecategory').value,
        quantity: Number(document.getElementById('equantity').value),
        brand: document.getElementById('ebrand').value,
        weight: Number(document.getElementById('eweight').value),
        color: document.getElementById('ecolor').value
    };

    fetch(`/items/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
    }).then(res => res.json())
        .then(() => {
            alert('Data was updated successfully');
            cancelEditItem();
            fetchItem();
        }).catch(err => console.error('Error while updating the data', err));
}

function viewItem(id) {
    document.querySelector('.viewUser').style.display = 'block';
    document.querySelector('.main').style.filter = 'blur(8px)';
    fetch(`/items/${id}`, {
        method: 'GET'
    }).then(res => res.json())
        .then(data => {
            data = data[0];
            document.getElementById('vname').innerHTML = data.name;
            document.getElementById('vdescription').innerHTML = data.description;
            document.getElementById('vprice').innerHTML = data.price;
            document.getElementById('vcategory').innerHTML = data.category;
            document.getElementById('vquantity').innerHTML = data.quantity;
            document.getElementById('vbrand').innerHTML = data.brand;
            document.getElementById('vweight').innerHTML = data.weight;
            document.getElementById('vcolor').innerHTML = data.color;
        }).catch(err => console.error('Error while fetching the data for that particular id', err));
}

function cancelView() {
    document.querySelector('.viewUser').style.display = 'none';
    document.querySelector('.main').style.filter = '';
}
