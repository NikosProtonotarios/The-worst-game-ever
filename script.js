document.addEventListener('DOMContentLoaded', function() {
    const detailsElements = document.querySelectorAll('details');
    let alreadyPlayed = false; 
    let won = false;
  
    function handleToggle(event) {
      const clickedDetails = event.target.closest('details');
  
      if (alreadyPlayed) {
        clickedDetails.open = false; // Close the details element
        alert("Whaaat? Do you want to cheat? No!!! You are a LOOSER! Never forget that... If you want to play again press OK and refresh the page to choose from the beginning");
        location.reload();
      }
  
      alreadyPlayed = true;
  
      if (clickedDetails === detailsElements[2]) {
        won = true;
        alert("What did you expect? A Ferrari or a travel in Dubai? It is just a game in the browser...");
        
        
        setTimeout(() => {
          alert("Dont be impressed... I made most of the javascript code with chatGPT help. I'm not that good :D");
          location.reload(); // Refresh the page
        }, 100); // Short delay to ensure the first alert is dismissed before refreshing
      }
    }
  
    detailsElements.forEach(details => {
      details.addEventListener('toggle', handleToggle);
    });
  });
  