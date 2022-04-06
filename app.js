let input = document.querySelector('input')
let volume = document.getElementById('volume')

input.oninput = ( () =>{
    let value = input.value
    volume.innerHTML = value
    // progress.style.left = (input.value/1.1 ) + '%'
})