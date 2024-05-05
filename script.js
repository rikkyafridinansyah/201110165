document.getElementById('topup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form data
    const username = document.getElementById('username').value;
    const amount = parseInt(document.getElementById('amount').value);

    // Perform top-up logic (e.g., send request to server, update user's balance)
    console.log(`Top-up ${amount} credits for user ${username}`);
});
