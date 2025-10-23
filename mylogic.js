function getGreeting(name = 'user') {
  const time = new Date().toLocaleTimeString();
  return `Hello, ${name}! It's ${time} now`;
}
module.exports = {getGreeting};