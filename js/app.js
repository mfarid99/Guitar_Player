const sounds = [
  'guitar1',
  'guitar2',
  'guitar3',
  'guitar4',
  'guitar5',
  'guitar6',
]

sounds.forEach((sound) => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('mouseover', () => {
    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

const stopSongs = () => {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound).play()

    song.pause()
    song.currentTime = 0
  })
}

stopSongs()
