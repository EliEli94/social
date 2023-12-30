// swiper
let swiper = new Swiper(".mySwiper",{
    slidesPerView: 6,
    spaceBetween: 5,
})

// window scroll
window.addEventListener('scroll',()=>{
    document.querySelector('.profile-pop-up').style.display='none'
})
// profile pop-up
document.querySelectorAll('#my-profile-picture').forEach(AllProfile => {
    AllProfile.addEventListener('click',()=>{
        document.querySelector('.profile-pop-up').style.display='flex'
    })
});

document.querySelectorAll('.close').forEach(AllCloser => {
    AllCloser.addEventListener('click',()=>{
        document.querySelector('.profile-pop-up').style.display='none'
    })
});

document.querySelector('#profile-upload').addEventListener('change',()=>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg=>{
        AllMyProfileImg.src = URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
})