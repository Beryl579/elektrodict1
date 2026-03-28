// aivIsLoading guard flag for preventing concurrent requests
let aivIsLoading = false;

async function fetchData() {
    if (aivIsLoading) {
        console.warn('Fetch request already in progress.');
        return;
    }
    aivIsLoading = true;
    try {
        // Safe DOM manipulation example
        const resultDiv = document.getElementById('result');
        if (!resultDiv) throw new Error('Result div not found');

        // Fetch data from API
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // Update the DOM safely
        resultDiv.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        aivIsLoading = false; // Reset the loading flag
        console.log('Fetch request completed. Loading state reset.');
    }
}

// Additional logging for debugging
console.log('fetchData function ready to use.');