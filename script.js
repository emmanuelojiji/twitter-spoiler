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

  const love = document.querySelectorAll(".love");
  const retweet = document.querySelectorAll(".retweet");

  for (let index = 0; index < love.length; index++) {
    love[index].onclick = () => {
      if (love[index].classList.contains("heartbeat")) {
        love[index].classList.remove("heartbeat");
      } else {
        love[index].classList.add("heartbeat");
      }
    };
    
  }

 
for (let index = 0; index < retweet.length; index++) {
  retweet[index].onclick = () => {
    if (retweet[index].classList.contains("is-retweeted")) {
      retweet[index].classList.remove("is-retweeted");
    } else {
      retweet[index].classList.add("is-retweeted");
    }
  };
  
}
 








};
