const items = document.querySelectorAll('.item-w');
const leftBox = document.querySelector('.left');
const rightBox = document.querySelector('.right');

items.forEach(item => {
    item.addEventListener('dragstart', e => {
        let selected = e.target

        rightBox.addEventListener('dragover', e => {
            e.preventDefault();
        });
        rightBox.addEventListener('drop', e => {
            rightBox.append(selected);
            selected = '';
        })
        leftBox.addEventListener('dragover', e => {
            e.preventDefault();
        });
        leftBox.addEventListener('drop', e => {
            leftBox.append(selected);
            selected = '';
        })
    });

})

