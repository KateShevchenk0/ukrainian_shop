//navbar//

const navbar = document.querySelector('.navbar');


//  window.addEventListener('scroll', () =>{
//     console.log(scrollY);
//  })

window.addEventListener('scroll', () =>{
        if(scrollY >= 180){
            navbar.classList.add('bg');
        } else{
            navbar.classList.remove('bg');
        }
 })

//  image college//

const collegeImage = [...document.querySelectorAll('.collage-img')]

collegeImage.map((item, i) => {
    item.addEventListener('mouseover',() =>{
        collegeImage.map((image, index) =>{
            if(index != i){
                image.style.filter = 'blur(10px)';
                item.style.zIndex = 2;
            }
        })
    })
    item.addEventListener('mouseleave', () =>{
        collegeImage.map((image, index) =>{
            image.style = null;
        })
    }) 
})