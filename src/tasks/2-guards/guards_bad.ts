function publishTweet(tweet) {
  // ❌ deep nested blocks => pyramid hell
  if (isLoggedIn()) {
    if (tweet) {
      if (isTweetDoubleChecked()) {
        tweetIt(tweet);
      } else {
        throw new Error("Don't publish without double checking your tweet");
      }
    } else {
      throw new Error("Your tweet is empty, can't publish it");
    }
  } else {
    throw new Error('You need to log in before tweeting');
  }
}

function isLoggedIn() {
  return Math.random() >= 0.5;
}
function isTweetDoubleChecked() {
  return Math.random() >= 0.5;
}
function tweetIt(tweet) {
  console.log(tweet);
}
