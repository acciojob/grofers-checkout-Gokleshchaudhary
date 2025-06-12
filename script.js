const getSumBtn = document.getElementById("getSumBtn");

const getSum = () => {
    // Step 1: Select all price elements
    const priceElements = document.querySelectorAll('.prices'); // Use the correct class name

    // Step 2: Calculate total price
    let totalPrice = 0;
    priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent); // Convert to number and add to total
    });

    // Step 3: Create a new row and cell for the total price
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Make the cell span across two columns
    totalCell.textContent = `Total Price: ${totalPrice.toFixed(2)}`; // Format to 2 decimal places

    // Step 4: Append the cell to the row, and the row to the table
    newRow.appendChild(totalCell);
    document.querySelector('table').appendChild(newRow); // Append to the table
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);