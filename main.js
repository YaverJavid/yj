const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
const topSection = document.getElementById("top")
const topText = document.getElementById("top-text")

document.addEventListener("scroll", () => {
    const scrolled = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const percentageScrolled = (scrolled / totalScrollHeight) * 100;
    topSection.style.backgroundSize = `${100 + percentageScrolled}%`
    topText.style.opacity = `${100-percentageScrolled}%`
})