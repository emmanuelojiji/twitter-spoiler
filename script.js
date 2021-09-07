window.onload = () => {
  const dots = document.querySelector(".dots");
  const popup = document.querySelector(".popup");

  dots.onclick = () => {
    popup.style.display = "block";

   /* setTimeout(() => {
      popup.style.maxHeight = "auto";
    }, 1000); */
  };

  const leftArrow = document.querySelector(".left-arrow");
  const writeTweetContainer = document.querySelector(".write-tweet-container");
  const newTweetButton = document.querySelector(".new-tweet-container");

  newTweetButton.onclick = () => {
    writeTweetContainer.style.display = "block";
    tweetTextArea.focus();
  };

  leftArrow.onclick = () => {
    writeTweetContainer.style.display = "none";
  };

  const tweetTextArea = document.querySelector(".tweet-text-area");
  const sendTweetButton = document.querySelector(".send-tweet");

  tweetTextArea.onkeydown = () => {
    if (tweetTextArea.value.length >= -1) {
      sendTweetButton.style.opacity = "1";
      console.log("greater than 0");
    } else if (tweetTextArea.value.length <= 0) {
      sendTweetButton.style.opacity = "0.5";
      console.log("0 or less");
    }
  };

  const love = document.querySelector(".love");
  const retweet = document.querySelector(".retweet");

  love.onclick = () => {
    if (love.classList.contains("heartbeat")) {
      love.classList.remove("heartbeat");
    } else {
      love.classList.add("heartbeat");
    }
  };

  retweet.onclick = () => {
    if (retweet.classList.contains("is-retweeted")) {
      retweet.classList.remove("is-retweeted");
    } else {
      retweet.classList.add("is-retweeted");
    }
  };
};
