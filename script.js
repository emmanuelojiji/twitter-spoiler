window.onload = () => {

  const revealedTweet = document.querySelector('.revealed-tweet-container');
  const warningContainer = document.querySelector('.warning-container');
  const view = document.querySelectorAll('.view');


  for (let index = 0; index < view.length; index++) {
    view[index].onclick = () => {
      warningContainer.style.display = 'none';
      flaggedMessage.style.display = 'none';
      revealedTweet.style.display = "block";
      setTimeout(() => {
        revealedTweet.style.opacity = '1';
      },0);
    }
  }
  

  const dots = document.querySelector(".dot-wrap");
  const popup = document.querySelector(".popup");

  
  dots.onclick = (e) => {
    popup.style.display = "block";
    e.stopPropagation();
  }

  document.onclick = (event) => {
      let isClickInside = popup.contains(event.target);

      if (!isClickInside) {
        console.log("outside box");
        popup.style.display = 'none';
      }
    

  };

  const spoiler = document.querySelector(".spoiler");
  const flaggedMessage = document.querySelector(".flagged-as-container");

  spoiler.onclick = () => {
    flaggedMessage.style.display = "block";
    warningContainer.style.display = "none"
    popup.style.display = "none";
    revealedTweet.style.display = "none";
  }

  const cancel = document.querySelector(".cancel");
  const writeTweetContainer = document.querySelector(".write-tweet-container");
  const newTweetButton = document.querySelector(".new-tweet-container");

  newTweetButton.onclick = () => {
    writeTweetContainer.style.display = "block";
    tweetTextArea.focus();
    document.documentElement.style.overflow = "hidden";
    writeTweetContainer.style.overflow = "hidden";

  };

  cancel.onclick = () => {
    writeTweetContainer.style.display = "none";
    document.documentElement.style.overflow = "auto";
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
