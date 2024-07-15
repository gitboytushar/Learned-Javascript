const accordians = document.querySelectorAll('.accordian')

accordians.forEach(accordian => {
  const icon = accordian.querySelector('.icon')
  const answer = accordian.querySelector('.answer')

  // answer showing with smooth animation
  accordian.addEventListener('click', () => {
    if (icon.classList.contains('active')) {
      icon.classList.remove('active')
      answer.style.maxHeight = null
    } else {
      icon.classList.add('active')
      answer.style.maxHeight = answer.scrollHeight + 'px' //.scrollHeight return an integer value only
    }
  })
})