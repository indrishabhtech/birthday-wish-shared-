const wishes = [
  `🎂 Happy Birthday ${name}! 🎈 Wishing you a day filled with love and joy!`,
  `🎉 May all your dreams come true, ${name}! Have an amazing birthday! 🎊`,
  `🎂 Cheers to you, ${name}! May your special day be as incredible as you are! 🎉`,
  `🎈 Wishing you all the happiness your heart can hold, ${name}. Have a fantastic birthday! 🎂`,
  `🎊 Another year older, wiser, and more fabulous, ${name}! Have a great birthday! 🎉`,
  `🎂 Happy Birthday, ${name}! 🎈 Hope your day is full of cake, presents, and fun!`,
  `🎉 You deserve all the happiness in the world, ${name}. Have an amazing birthday celebration! 🎂`,
  `🎈 Here's to another year of greatness, ${name}! Wishing you a very happy birthday! 🎉`,
  `🎊 It's your day, ${name}! Shine bright and make it unforgettable! 🎂`,
  `🎉 May your birthday be as special as you, ${name}! Sending you lots of love and joy! 🎂`,
  `🎂 Here's to a birthday filled with laughter, love, and unforgettable moments, ${name}! 🎈`,
  `🎉 May this year bring you closer to all your dreams and wishes, ${name}! Happy Birthday! 🎂`,
  `🎊 Time to celebrate, ${name}! Wishing you a day filled with love, joy, and cake! 🎂`,
  `🎉 You light up every room, ${name}. Hope your birthday is as bright as you are! 🎈`,
  `🎈 Sending birthday wishes for health, happiness, and success this year, ${name}! 🎂`,
  `🎊 It's time to celebrate YOU, ${name}! Hope your birthday is full of love and laughter! 🎉`,
  `🎂 To the best person ever, ${name}, may your birthday be as awesome as you are! 🎈`,
  `🎉 Today is the perfect day to tell you how amazing you are, ${name}! Happy Birthday! 🎂`,
  `🎈 Sending you endless joy and birthday love, ${name}! Have a fantastic celebration! 🎉`,
  `🎊 Cheers to you, ${name}! Here's to a birthday as fantastic as you! 🎂`,
  `🎉 Wishing you a day full of surprises, laughter, and love, ${name}! Happy Birthday! 🎈`,
  `🎂 Let's raise a toast to an incredible person, ${name}! May this year bring you happiness! 🎉`,
  `🎉 Every moment of today should be as special as you are, ${name}! Have a wonderful birthday! 🎈`,
  `🎂 Hope this birthday brings you everything you've been wishing for, ${name}! 🎉`,
  `🎉 Celebrating you today, ${name}! Here's to a year filled with love, laughter, and adventure! 🎂`,
];




function generateLink() {
  const name = document.getElementById('name').value;
  if (name) {
    const url = `https://birthday-wish-shared.netlify.app//${encodeURIComponent(name)}`;

    document.getElementById('share-link').value = url;
    document.getElementById('share-section').classList.remove('hidden');
  } else {
    alert('Please enter a name');
  }
}

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

function shareOnWhatsApp() {
  const name = document.getElementById('name').value;
  const message = encodeURIComponent(`Check out this awesome birthday wish for ${name}: ${document.getElementById('share-link').value}`);
  const whatsappURL = `https://api.whatsapp.com/send?text=${message}`;
  window.open(whatsappURL, '_blank');
}

function shareOnFacebook() {
  const url = encodeURIComponent(document.getElementById('share-link').value);
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(facebookURL, '_blank');
}

function shareOnTwitter() {
  const name = document.getElementById('name').value;
  const message = encodeURIComponent(`Check out this amazing birthday wish for ${name}! 🎉`);
  const url = encodeURIComponent(document.getElementById('share-link').value);
  const twitterURL = `https://twitter.com/intent/tweet?text=${message}&url=${url}`;
  window.open(twitterURL, '_blank');
}






