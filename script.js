// This file can be used for future JavaScript interactions.

const claimButton = document.getElementById('claimButton');
const claimStatusMessage = document.getElementById('claimStatusMessage');

if (claimButton && claimStatusMessage) {
    claimButton.addEventListener('click', function() {
        // Change button text and disable it
        claimButton.textContent = 'Processing...';
        claimButton.disabled = true;

        // Display processing message
        claimStatusMessage.textContent = 'Please wait while we process your claim...';
        claimStatusMessage.style.color = '#3498db'; // Blue color for processing message
        claimStatusMessage.style.display = 'block'; // Ensure it's visible

        // Simulate a delay (e.g., 2.5 seconds)
        setTimeout(function() {
            // Option 1: Hide the button
            // claimButton.style.display = 'none';

            // Option 2: Change button text to "Claim Submitted!" (and keep it disabled)
            claimButton.textContent = 'Claim Submitted!';
            // claimButton.disabled will remain true

            // Display success message
            claimStatusMessage.innerHTML = '<strong>Congratulations!</strong> Your claim for $750 is being processed. <br>You will be contacted shortly via email.';
            claimStatusMessage.style.color = '#2ecc71'; // Green color for success message
        }, 2500); // 2.5 seconds delay
    });
} else {
    if (!claimButton) {
        console.error('Error: Claim button not found.');
    }
    if (!claimStatusMessage) {
        console.error('Error: Claim status message container not found.');
    }
}
