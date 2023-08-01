const btn = document.querySelector("#btn-change")
btn.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-bg')
  document.body.setAttribute('data-bg', currentTheme === 'light' ? 'dark' : 'light')
  btn.textContent = currentTheme + ' mode'
})