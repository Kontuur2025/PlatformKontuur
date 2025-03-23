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

  // Function to add video containers
  function addVideos(amount) {
    console.log("Adding " + amount + " videos...");  // Debugging log
    for (let i = 0; i < amount; i++) {
      const videoFile = videoFiles[i % videoFiles.length]; // Cycle through video files

      // Create a video container element
      let videoContainer = document.createElement('div');
      videoContainer.classList.add('video-container');  // Add a class for styling

      // Create a video element
      let videoElement = document.createElement('video');
      videoElement.classList.add('video');  // Add a class for video styling
      videoElement.setAttribute('controls', '');  // Video controls (play, pause, etc.)
      videoElement.setAttribute('src', videoFile);  // Set the video file source
      videoElement.setAttribute('width', '100%');  // Full width of the container
      videoElement.setAttribute('height', 'auto');  // Maintain aspect ratio

      // Append the video element to the container
      videoContainer.appendChild(videoElement);

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
