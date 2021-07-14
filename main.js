
/* 아직 JS는 제대로 배우지 못했습니다 */

const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});