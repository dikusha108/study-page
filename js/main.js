function addPadding(){
    let card = document.querySelector('.work-img-card'),
        content = document.querySelector('.work-img-card-content');

    let pt = card.scrollHeight - content.scrollHeight;
    card.style.paddingTop = pt + 'px';
}

addPadding();