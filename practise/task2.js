let items = {
  id: 1,
  product: "",
  price: 60000,
  qty: 1,
  total: 60000,
};

let rows = document.getElementById("items");

let row1 = `  <td>${items.id}</td>
                    <td><img src="${items.product}" height:2px;"/></td>
                    <td>${items.price}</td> 
                    <td class="d-flex ">
                        <i id="minus" class="bi bi-dash-circle"></i>
                     <h1 id="element">
                        ${items.qty}
                        </h1>
                        <i id="plus" class="bi bi-plus-circle"></i>
                     </td>
                     <td id="total">${items.total}</td>`;

rows.innerHTML = row1;

let minusBtn = document.getElementById("minus");
let plusBtn = document.getElementById("plus");
let no = document.getElementById("element");
let countTotal = document.getElementById("total");

let qty = 1;

function totalitem() {
  items.qty = qty;
  countTotal.innerText = items.price * items.qty;

}

plusBtn.addEventListener("click", () => {
  qty++;
  no.innerText = qty;
  totalitem();
});

minusBtn.addEventListener("click", () => {
  if (qty > 1) {
    qty--;
    no.innerText = qty;
    totalitem();
  } else {
    no.innerText = qty;
  }
});
