// ITERATION 1


let total =0;
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = Number(product.querySelector('.price span').innerHTML);
  let quantity = Number(product.querySelector('input').value);
  let subtotal = price * quantity;
  let subtotalNode = product.querySelector('.subtotal span');
  subtotalNode.innerHTML = subtotal;
  total += subtotal;
  console.log( price)
  console.log(total)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  
  let productsArray = document.querySelectorAll('.product');
  console.log(productsArray)
    productsArray.forEach(product => {
      updateSubtotal(product)
    })
  
  // ITERATION 3
   const totalNode = document.querySelector('#total-value span');
   totalNode.innerHTML= total;
}

// ITERATION 4

function removeProduct(event) {
  
  const target = event.currentTarget.parentNode.parentNode;
  document.querySelector('tbody').removeChild(target);
  total = 0; 
  calculateAll()
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  // const createProduct =  currentTarget.parentNode;
  const productNameInput = document.querySelector('.create-product input[type=text]');
  const productPriceInput = document.querySelector('.create-product input[type=number]');
 if(productPriceInput.value !== 0 && productNameInput.value !== ''){
   
   const newProduct = document.createElement('tr');
   newProduct.className = 'product';
   
   newProduct.innerHTML = `<td class="name">
                            <span>${productNameInput.value} </span>
                          </td>
                          <td class="price">$<span>${productPriceInput.value}</span></td>
                          <td class="quantity">
                            <input type="number" value="0" min="0" placeholder="Quantity" />
                          </td>
                          <td class="subtotal">$<span>0</span></td>
                          <td class="action">
                            <button class="btn btn-remove">Remove</button>
                          </td>`;

    const tableBody = document.querySelector('tbody');
    tableBody.appendChild(newProduct);
    
    const removeBtns = document.querySelectorAll('.btn-remove');
    removeBtns.forEach(btn => btn.addEventListener('click', removeProduct));
    productNameInput.value = '';
    productPriceInput.value = 0;

  } else{
    alert('Please set Name and Price');
  }

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtnArr = document.querySelectorAll('.btn-remove');
  removeBtnArr.forEach(btn => btn.addEventListener('click', removeProduct));

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);

});
