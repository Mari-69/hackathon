document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for each element in the periodic table
    const elements = document.querySelectorAll('.element');
    const elementDetails = document.getElementById('element-details');
    const atomicNumber = document.getElementById('atomic-number');
    const elementName = document.getElementById('element-name');
    const elementSymbol = document.getElementById('element-symbol');
    const atomicMass = document.getElementById('atomic-mass');
  
    elements.forEach(element => {
      element.addEventListener('click', function () {
        // Get the element data
        const atomic = element.getAttribute('data-atomic');
        const name = element.getAttribute('data-name');
        const symbol = element.getAttribute('data-symbol');
        const mass = element.getAttribute('data-mass');
  
        // Display element details
        atomicNumber.textContent = atomic;
        elementName.textContent = name;
        elementSymbol.textContent = symbol;
        atomicMass.textContent = mass;
  
        // Show the details section
        elementDetails.style.display = 'block';
      });
    });
  });
  
