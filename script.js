

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



let currentWishIndex = 0;
const visibleWishes = wishes.slice(0, 5); // Show only 5 wishes

// Function to display a specific wish
function displayCurrentWish(name) {
  const wish = visibleWishes[currentWishIndex].replace('!', `, ${name}!`);
  document.getElementById('greeting').textContent = wish;
}

function showNextWish(name) {
  if (currentWishIndex < visibleWishes.length - 1) {
    currentWishIndex++;
    displayCurrentWish(name);
  } else {
    triggerBalloonsAndCandles(name); // Show balloons and cake animation on last wish
  }
}

function showPreviousWish(name) {
  if (currentWishIndex > 0) {
    currentWishIndex--;
    displayCurrentWish(name);
  }
}

// Function to insert user's name and display cake
function displayCake(name) {
  const userNameElement = document.getElementById('user-name');
  userNameElement.textContent = `Happy Birthday, ${name}!`;
}

// Function to trigger balloon animation
function triggerBalloons() {
  const container = document.querySelector('.container');

  // Create balloon elements with different colored strings
  for (let i = 0; i < 5; i++) {
    const balloon = document.createElement('div');
    balloon.className = `balloon balloon-${i + 1}`; // Add balloon class with unique colors
    balloon.style.left = `${20 + i * 60}px`; // Positioning the balloons
    container.appendChild(balloon);

    // Animate balloons with anime.js
    anime({
      targets: balloon,
      translateY: [-500, 0],
      duration: 8000,
      easing: 'easeInOutQuad',
      loop: false,
      complete: () => {
        balloon.remove(); // Remove balloons after animation
      }
    });
  }
}

// Candle flame animation with blinking effect
function blinkCandles() {
  const flames = document.querySelectorAll('.flame');
  setInterval(() => {
    flames.forEach(flame => flame.classList.toggle('flame-active'));
  }, 400); // Blinking effect every 0.4 seconds
}

// Display cake, animate candles, and start balloons animation
function triggerBalloonsAndCandles(name) {
  displayCake(name); // Show the cake with user's name
  blinkCandles(); // Blink the candle flames
  triggerBalloons(); // Start the balloon animation

  // Reload the page after 12 seconds
  setTimeout(() => location.reload(), 12000);
}

// Function to display the first wish and navigation buttons
function displayWish() {
  const path = window.location.pathname;
  const name = decodeURIComponent(path.substring(1)); // Get the name from the URL

  if (name) {
    displayCurrentWish(name); // Display the first wish

    // Show navigation buttons after displaying the first wish
    const navButtons = `
      <div id="nav-buttons">
        <button onclick="showPreviousWish('${name}')">⏮️ Previous</button>
        <button onclick="showNextWish('${name}')">⏭️ Next</button>
      </div>
    `;
    document.querySelector('.container').insertAdjacentHTML('beforeend', navButtons);

    document.getElementById('input-panel').classList.add('hidden'); // Hide the input panel
    document.getElementById('share-section').classList.add('hidden'); // Hide the share panel
  }
}

window.onload = displayWish;


