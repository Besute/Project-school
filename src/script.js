const mainInfo = document.querySelector('ul').childNodes[5],
    firstSection = document.querySelector('.first-section')

mainInfo.addEventListener('click', (e) => {
    firstSection.scrollIntoView({behavior: "smooth"})
})