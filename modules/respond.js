/* Dumping logic from yuki.js to build responses later
yuki.hasNotSpammedLately = true
yuki.spammed = function () {
  yuki.hasNotSpammedLately = false
  setTimeout(function () { yuki.hasNotSpammedLately = true }, 300000)
}
*/

module.exports = {
  ':^': function () {
    return ':^)'
  },

  'tbh fam': function () {
    return 'desu'
  }
}
