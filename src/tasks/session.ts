let lastTime = new Date(2021, 12, 2);
let daysSLV = getDays(lastTime);
let ok;
if (daysSLV < 30) {
  ok = true;
}
if (ok === false) {
  login();
}

function getDays(date: Date) {
  const diff = Math.abs(new Date().getTime() - date.getTime());
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days;
}
function login() {
  console.log('log in');
}
