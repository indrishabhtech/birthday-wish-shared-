
const wishes = [
  `🎂 Happy Birthday! 🎈 Wishing you a day filled with love and joy!`,
  `🎉 May all your dreams come true! Have an amazing birthday! 🎊`,
  `🎂 Cheers to you! May your special day be as incredible as you are! 🎉`,
  `🎈 Wishing you all the happiness your heart can hold. Have a fantastic birthday! 🎂`,
  `🎊 Another year older, wiser, and more fabulous! Have a great birthday! 🎉`,
  `🎂 Happy Birthday! 🎈 Hope your day is full of cake, presents, and fun!`,
  `🎉 You deserve all the happiness in the world. Have an amazing birthday celebration! 🎂`,
  `🎈 Here's to another year of greatness! Wishing you a very happy birthday! 🎉`,
  `🎊 It's your day! Shine bright and make it unforgettable! 🎂`,
  `🎉 May your birthday be as special as you! Sending you lots of love and joy! 🎂`,
  `🎂 Here's to a birthday filled with laughter, love, and unforgettable moments! 🎈`,
  `🎉 May this year bring you closer to all your dreams and wishes! Happy Birthday! 🎂`,
  `🎊 Time to celebrate! Wishing you a day filled with love, joy, and cake! 🎂`,
  `🎉 You light up every room. Hope your birthday is as bright as you are! 🎈`,
  `🎈 Sending birthday wishes for health, happiness, and success this year! 🎂`,
  `🎊 It's time to celebrate YOU! Hope your birthday is full of love and laughter! 🎉`,
  `🎂 To the best person ever, may your birthday be as awesome as you are! 🎈`,
  `🎉 Today is the perfect day to tell you how amazing you are! Happy Birthday! 🎂`,
  `🎈 Sending you endless joy and birthday love! Have a fantastic celebration! 🎉`,
  `🎊 Cheers to you! Here's to a birthday as fantastic as you! 🎂`,
  `🎉 Wishing you a day full of surprises, laughter, and love! Happy Birthday! 🎈`,
  `🎂 Let's raise a toast to an incredible person! May this year bring you happiness! 🎉`,
  `🎉 Every moment of today should be as special as you are! Have a wonderful birthday! 🎈`,
  `🎂 Hope this birthday brings you everything you've been wishing for! 🎉`,
  `🎉 Celebrating you today! Here's to a year filled with love, laughter, and adventure! 🎂`,
];


// Function to generate a link
function generateLink() {
  const name = document.getElementById('name').value.trim();
  if (name) {
    const url = `https://birthday-wish-shared.netlify.app/${encodeURIComponent(name)}`;
    document.getElementById('share-link').value = url;
    document.getElementById('share-section').classList.remove('hidden');
  } else {
    alert('Please enter a name');
  }
}

// Function to copy the link
function copyLink() {
  const link = document.getElementById('share-link');
  link.select();
  link.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(link.value).then(() => {
    alert('Link copied to clipboard');
  }).catch((error) => {
    console.error('Failed to copy text:', error);
  });
}

// Function to share on WhatsApp
function shareOnWhatsApp() {
  const name = document.getElementById('name').value;
  const message = encodeURIComponent(`Check out this awesome birthday wish for ${name}: ${document.getElementById('share-link').value}`);
  const whatsappURL = `https://api.whatsapp.com/send?text=${message}`;
  window.open(whatsappURL, '_blank');
}

// Function to share on Facebook
function shareOnFacebook() {
  const url = encodeURIComponent(document.getElementById('share-link').value);
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(facebookURL, '_blank');
}

// Function to share on Twitter
function shareOnTwitter() {
  const name = document.getElementById('name').value;
  const message = encodeURIComponent(`Check out this amazing birthday wish for ${name}! 🎉`);
  const url = encodeURIComponent(document.getElementById('share-link').value);
  const twitterURL = `https://twitter.com/intent/tweet?text=${message}&url=${url}`;
  window.open(twitterURL, '_blank');
}

// Function to display the current wish
let currentWishIndex = 0;
const visibleWishes = wishes.slice(0, 5); // Only display the first 5 wishes

function displayCurrentWish(name) {
  const wish = visibleWishes[currentWishIndex].replace('!', `, ${name}!`);
  document.getElementById('greeting').textContent = wish;
}

function showPreviousWish(name) {
  if (currentWishIndex > 0) {
    currentWishIndex--;
    displayCurrentWish(name);
  }
}

function showNextWish(name) {
  if (currentWishIndex < visibleWishes.length - 1) {
    currentWishIndex++;
    displayCurrentWish(name);
  } else {
    triggerBalloonsAndCandles(); // Show balloons and blowout candles on the last wish
  }
}

// Function to display the cake and animate balloons and candles
function triggerBalloonsAndCandles() {
  const container = document.querySelector('.container');

  // Create balloon elements
  for (let i = 0; i < 7; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${20 + i * 60}px`; // Positioning the balloons
    container.appendChild(balloon);
    
    // Animate balloons using anime.js
    anime({
      targets: balloon,
      translateY: [-500, 0],
      duration: 6000,
      easing: 'easeInOutQuad',
      loop: false,
      complete: () => {
        balloon.remove(); // Remove balloons after animation
      }
    });
  }

  // Candle animation (flame blowing out)
  const candle = document.createElement('div');
  candle.className = 'candle';
  container.appendChild(candle);

  const flame = document.createElement('div');
  flame.className = 'flame';
  candle.appendChild(flame);

  anime({
    targets: flame,
    scale: [1, 0],
    duration: 6000,
    easing: 'easeInOutQuad',
    complete: () => {
      flame.remove(); // Remove flame after blowing out
      setTimeout(() => location.reload(), 5000); // Reload the page after 5 seconds
    }
  });
}

// Function to display the cake
function displayCake(name) {
  const userNameElement = document.getElementById('user-name');
  userNameElement.textContent = `Happy Birthday, ${name}!`;
}

// Display wish and cake
function displayWishAndCake() {
  const path = window.location.pathname;
  const name = decodeURIComponent(path.substring(1)); // Get the name from the URL

  if (name) {
    displayCurrentWish(name); // Display the first wish
    displayCake(name);        // Display the cake

    // Show navigation buttons after displaying the first wish
    const navButtons = `
      <div id="nav-buttons">
        <button onclick="showPreviousWish('${name}')">⏮️ Previous</button>
        <button onclick="showNextWish('${name}')">⏭️ Next</button>
      </div>
    `;
    document.querySelector('.container').insertAdjacentHTML('beforeend', navButtons);

    // Hide input and share sections
    document.getElementById('input-panel').classList.add('hidden');
    document.getElementById('share-section').classList.add('hidden');
  }
}

// Single onload function to handle both wish and cake display
window.onload = function() {
  displayWishAndCake();

  // Trigger confetti after 4 seconds
  setTimeout(triggerConfetti, 4000);
};

// Confetti trigger
function triggerConfetti() {
  setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 2500); // Confetti triggered every 2.5 seconds
}




