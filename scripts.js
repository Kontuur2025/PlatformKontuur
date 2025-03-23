document.addEventListener("DOMContentLoaded", function () {
  let content = document.getElementById('content');
  let loader = document.getElementById('loader');

  // Video file names in sequence
  const videoFiles = [
    "1.mov",
    "2.mov",
    "3.mov",
    "4.mov",
    "5.mov"
  ];

  // Global counter to track total videos added
  let videoCounter = 0;

  // Function to add video containers
  function addVideos(amount) {
    console.log("Adding " + amount + " videos...");  // Debugging log
    for (let i = 0; i < amount; i++) {
      videoCounter++; // Increment the global video counter
      const videoFile = videoFiles[(videoCounter - 1) % videoFiles.length]; // Cycle through video files
      // Determine link number from 1 to 5 (cycling)
      let linkNumber = ((videoCounter - 1) % 5) + 1;

      // Create a video container element
      let videoContainer = document.createElement('div');
      videoContainer.classList.add('video-container');  // Add a class for styling

      // Create a single hyperlink container above the video
      let linkContainer = document.createElement('div');
      linkContainer.classList.add('link-container');
      let link = document.createElement('a');
      // Update the href to point to the corresponding bio page
      link.href = "bio" + linkNumber + ".html";
      link.innerText = "Visit Link #" + linkNumber;
      linkContainer.appendChild(link);
      videoContainer.appendChild(linkContainer);

      // Create a video element
      let videoElement = document.createElement('video');
      videoElement.classList.add('video');  // Add a class for video styling
      videoElement.setAttribute('controls', '');  // Video controls (play, pause, etc.)
      videoElement.setAttribute('src', videoFile);  // Set the video file source
      videoElement.setAttribute('width', '100%');  // Full width of the container
      videoElement.setAttribute('height', 'auto');  // Maintain aspect ratio

      // Append the video element to the container
      videoContainer.appendChild(videoElement);

      // Create like button container below the video
      let likeContainer = document.createElement('div');
      likeContainer.classList.add('like-container');

      // Create 4 like buttons with space between each
      for (let j = 1; j <= 4; j++) {
        let likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        likeButton.innerText = "Like #" + j;
        likeButton.style.marginRight = "10px"; // Added margin for spacing
        // Add click event to toggle liked state
        likeButton.addEventListener("click", function() {
          likeButton.classList.toggle("liked");
        });
        likeContainer.appendChild(likeButton);
      }
      
      videoContainer.appendChild(likeContainer);

      // Append the video container to the content
      content.appendChild(videoContainer);
    }

    loader.style.display = 'none';  // Hide loader after new videos are added
  }

  // Scroll event to detect when the user reaches the bottom of the page
  window.addEventListener('scroll', function () {
    console.log("Scroll event triggered");  // Debugging log
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
      loader.style.display = 'block';  // Show loader when near the bottom
      setTimeout(function () {
        addVideos(5);  // Add 5 new videos after a delay
      }, 1000);  // Simulate loading delay
    }
  });

  addVideos(10); // Initial load of 10 videos
});
