const gloAcademyList = document.querySelector('.glo-academy-list');


const createList = (wrapper, listVideo) => {
    wrapper.textContent = '';
    // const card = createCard
    listVideo.forEach(item => wrapper.textContent += item);
};
const listVideo = ['a', 'b', 'c'];

createList(gloAcademyList, listVideo);

// 1 h : 17 min