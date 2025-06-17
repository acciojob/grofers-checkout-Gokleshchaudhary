const getSumBtn = document.getElementById("getSumBtn");

const getSum = () => {
    const priceElements = document.querySelectorAll('.prices'); // Prices ko select karna

    let totalPrice = 0;
    priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent); // Total price calculate karna
    });

    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Cell ko do columns mein span karna
    totalCell.textContent = `Total Price: ${totalPrice.toFixed(2)}`; // Total price display karna

    newRow.appendChild(totalCell);
    document.querySelector('table').appendChild(newRow); // New row ko table mein add karna
};

// Button par click hone par function call karna
getSumBtn.addEventListener("click", getSum);