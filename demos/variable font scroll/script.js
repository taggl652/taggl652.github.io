const title = document.querySelectorAll(".title")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("scroll", entry.isIntersecting)
    })
},
{
    threshold: 1,
}

)

title.forEach(title => {
    observer.observe(title)
})
