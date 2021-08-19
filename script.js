// change pricing annually to monthly
const toggleSwitch = document.querySelector('.toggle');
const optChange = document.querySelectorAll('.dollar');

if(toggleSwitch) {
    toggleSwitch.addEventListener('click', () => {
        // console.log(optChange)
        optChange.forEach(n => n.classList.toggle('opsi1'));
        optChange.forEach(n => n.classList.toggle('opsi2'));
    })
}

    // Select content
document.querySelectorAll('.card').forEach(item => {
    item.addEventListener('click', event => {
        // console.log(item)
        if(document.querySelector('.on').classList = 'card on') {
            document.querySelector('.on').classList = 'card';
            item.classList.toggle('on');
        }
    })
})