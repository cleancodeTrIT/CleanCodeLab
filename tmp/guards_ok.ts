function publishTweet(tweet) {
  // ✅ check guards with early return
  if (!isLoggedIn()) {
    throw new Error('You need to log in before tweeting');
  }
  if (!tweet) {
    throw new Error("Your tweet is empty, can't publish it");
  }
  if (!isTweetDoubleChecked()) {
    throw new Error('Don`t publish without double checking your tweet');
  }
  // ✅ avoid nesting
  tweetIt(tweet);
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
