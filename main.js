let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood = 'create';
let tmp;
console.log(title, price, taxes, ads, discount, total, count, category, submit
);
//get total//
function getTotal() {
        if (price.value != '') {
                let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
                total.innerHTML = +result;
                total.style.background = 'green';
        } else {
                total.innerHTML = '';
                total.style.background = 'rgb(229, 22, 146)';
        }
}
//create product//
let dataPro;
if (localStorage != null) {
        dataPro = JSON.parse(localStorage.product)
} else {
        dataPro = [];
}
submit.onclick = function () {
        let newPro = {
                title: title.value,
                price: price.value,
                taxes: taxes.value,
                ads: ads.value,
                discount: discount.value,
                total: total.value,
                count: count.value,
                category: category.value
        }
        if (mood === 'create') {
                if (newPro.count > 1) {
                        for (let i = 0; i < newPro.count; i++) {
                                dataPro.push(newPro);
                        }
                } else {
                        dataPro.push(newPro);
                }
        } else {
                dataPro[tmp] = newPro;
                mood = 'create';
                submit.innerHTML = 'create';
                count.style.display = 'block';
        }
        //save local storage//
        localStorage.setItem('product', JSON.stringify(dataPro))
        console.log(dataPro)
        clearData()
        readData()
}
//clear inputs//
function clearData() {
        title.value = '';
        price.value = '';
        taxes.value = '';
        ads.value = '';
        discount.value = '';
        total.innerHTML = '';
        count.value = '';
}
// read//
function readData() {
        getTotal()
        let tabel = '';
        for (let i = 0; i < dataPro.lenght; i++) {
                tabel +=
                        <tr>
                                <td>${i}</td>
                                <td>${dataPro[i].title}</td>
                                <td>${dataPro[i].price}</td>
                                <td>${dataPro[i].taxes}</td>
                                <td>${dataPro[i].discount}</td>
                                <td>${dataPro[i].total}</td>
                                <td>${dataPro[i].category}</td>
                                <td><button onclick="updataData(${i})" id="update">update</button></td>
                                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                        </tr>;
                document.getElementById('tbody').innerHTML = table;
                let btnDelete = document.getElementById('deleteAll');
                if (dataPro.lenght > 0) {
                        btnDelete.innerHTML =
                                <button onclick=" deleteAll()">delete All(${dataPro.lenght})</button>
                } else {
                        btnDelete.innerHTML = '';

                }
        }
}
readData()
//delete//
function deleteData(i) {
        dataPro.splice(i, 1);
        localStorage.product = JSON.stringify(dataPro)
        readData()
}
//delete//
function deleteAll() {
        localStorage.clear()
        dataPro.splice(0);
        readData()
}
//count//
// function Count() {

// }
//update//
function updataData(i) {
        title.value = dataPro[i].title;
        price.value = dataPro[i].price;
        taxes.value = dataPro[i].taxes;
        ads.value = dataPro[i].ads;
        discount.value = dataPro[i].discount;
        getTotal()
        count.style.display = 'none';
        category.value = dataPro[i].category;
        submit.innerHTML = 'Update';
        mood = 'Update';
        tmp = i;
        scroll({
                top: 0,
                behavior: "smooth"
        }
        )
}
//search//

let searchMood = 'title';
function getSearchMood(id) {
        let search = document.getElementById('search');
        if (id == 'searchTitle') {
                searchMood = 'title';
                search.Placeholder = 'Search By Title';
        } else {
                searchMood = 'category';
                search.Placeholder = 'Search By Category';
        }
        search.focus()
}

function searchData(value) {
        let tabel = '';
        if (searchMood == 'title') {
                for (dataPro[i].title.includes(value)) {
                        <tr>
                                <td>${i}</td>
                                <td>${dataPro[i].title}</td>
                                <td>${dataPro[i].price}</td>
                                <td>${dataPro[i].taxes}</td>
                                <td>${dataPro[i].discount}</td>
                                <td>${dataPro[i].total}</td>
                                <td>${dataPro[i].category}</td>
                                <td><button onclick="updataData(${i})" id="update">update</button></td>
                                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                        </tr>;
                }
        } else {

        }
        document.getElementById('tbody').innerHTML = table;

}
//clean data/