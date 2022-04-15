  
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();


    const audios = [...document.querySelectorAll('audio')];
    const keys = [...document.querySelectorAll('.key')]
    audios.forEach(audio => {
      
      if(audio.paused) {
        console.log(audio.dataset.key)
        // const key = document.querySelector(`div[data-key="${audio.dataset.key}"]`);
        // key.classList.add('playing');
        keys.forEach(key => {
          if(audio.dataset.key === key.dataset.key){
            key.classList.remove('playing')
          }
        })
      }
    });
  }

  
  window.addEventListener('keydown', playSound);