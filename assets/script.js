// swiper
let swiper = new Swiper(".mySwiper",{
    slidesPerView: 6,
    spaceBetween: 5,
})

// window scroll
window.addEventListener('scroll',()=>{
    document.querySelector('.profile-pop-up').style.display='none'
    document.querySelector('.add-post-pop-up').style.display='none'
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
        document.querySelector('.add-post-pop-up').style.display='none'
    })
});

document.querySelector('#profile-upload').addEventListener('change',()=>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg=>{
        AllMyProfileImg.src = URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
})

// add post
document.querySelector('#create-lg').addEventListener('click',()=>{
    document.querySelector('.add-post-pop-up').style.display='flex'
})

document.querySelector('#feed-pic-upload').addEventListener('change',()=>{
        document.querySelector('#postImg').src = URL.createObjectURL(document.querySelector('#feed-pic-upload').files[0])
})

document.querySelector('#add-story').addEventListener('change',()=>{
    document.querySelector('.story img').src = URL.createObjectURL(document.querySelector('#add-story').files[0])
    document.querySelector('.add-story').style.display='none'
})

// highlight post input
document.querySelector('.mini-btn').addEventListener('click',()=>{
    document.querySelector('.input-post').classList.add('boxshadow1')
})

// liked button
document.querySelectorAll('.action-button span:first-child i').forEach(liked=>{
    liked.addEventListener('click',()=>{
        liked.classList.toggle('liked')
    })    
})
setTimeout(() => {
    document.querySelector('.input-post').classList.remove('boxshadow1')
}, 3000);