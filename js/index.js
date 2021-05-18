const gloAcademyList = document.querySelector('.glo-academy-list');

const createCard = (dataVideo) => {
    // console.log(dataVideo);
    
    const card = document.createElement('div');
    card.classList.add('video-card');
    
    const imgUrl = dataVideo.snippet.thumbnails.high.url;
    const videoId = dataVideo.id.videoId;
    const titleVideo = dataVideo.snippet.title;
    const dateVideo = dataVideo.snippet.publishedAt;
    const channelTitle = dataVideo.snippet.channelTitle
    
    card.innerHTML =  `
        <div class="video-thumb">
        <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
            <img src="${imgUrl}" alt="" class="thumbnail">
        </a>

        </div>
        <h3 class="video-title">${titleVideo}</h3>
        <div class="video-info">
        <span class="video-counter">
            <span class="video-date">${dateVideo}</span>
        </span>
        <span class="video-channel">${channelTitle}</span>
        </div>
    `;

    return card;
}

const createList = (wrapper, listVideo) => {
    wrapper.textContent = '';
    // const card = createCard
    listVideo.forEach(item => {
        const card = createCard(item);
        wrapper.append(card);
    });
};
const listVideo = ['a', 'b', 'c'];

createList(gloAcademyList, gloAcademy);

// 1 h : 17 min