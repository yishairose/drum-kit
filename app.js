window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) {
        return;
    }
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
})
//Original approach. Remove playing class upon keyup event. Listens for keyup event on windows rather than transtion end on element
// window.addEventListener('keyup', function (e) {
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   console.log(key)
//   if (!key) {
//     return;
//   }
//   key.classList.toggle('playing');
// })

//New approach which was used in WesBos tutorial
//Uses array.from() which creates a array from selected elements
//Uses forEach, a modern approach to iterating through array
//Transitionend event listener. Listens for transition end on last ending transition and removes the class


const keys = Array.from(document.querySelectorAll('.key'));
function removeClass(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playing');
}

keys.forEach(key => {
    key.addEventListener('transitionend', removeClass)
});