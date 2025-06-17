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
describe('Grofers Checkout', () => {
    it('Testcase 1: Check if prices are displayed', () => {
        cy.visit('http://localhost:3000'); // Adjust the URL as needed
        cy.get('.prices').should('have.length', 5); // Check if there are 5 price elements
    });

    it('Testcase 2: Check total price calculation', () => {
        cy.visit('http://localhost:3000'); // Adjust the URL as needed
        cy.get('#getSumBtn').click(); // Click the button to calculate total
        cy.get('tr:last-child td').should('contain.text', 'Total Price: 400.00'); // Check if the total price is correct
    });
});