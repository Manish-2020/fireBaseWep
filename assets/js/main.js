addEventListener('submit', (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const obj = Object.fromEntries(form)
    console.log(obj.image.name)




})

document.querySelector('[name="image"]').addEventListener('change', (e) => {


    e.preventDefault()
    const form = new FormData(e.target)
    const obj = Object.fromEntries(form)
    console.log(obj.image.name)


    preventDefault()
    document.querySelector('#pic').setAttribute('src', URL.createObjectURL(obj.image.name))
})
