// const imageToBase64=(imgSRC)=>{
//     fetch(imgSRC.src)
//         .then((res) => res.blob())
//         .then((blob) => {
//             //read the blob as dataURL using the FileReader API
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 console.log(reader.result)
//                 const base64 = getBase64StringFromDataURL(reader.result)
//                 console.log(base64);
//             };
//             reader.readAsDataURL(blob);
//         })
// }
// const image = document.getElementById('image1');
// imageToBase64(image)

const store=[
   {
    id:Date.now(),
    imageURL(){
          fetch(`https://cdn.pixabay.com/photo/2022/06/23/09/46/mountain-7279430_960_720.jpg`)
          .then(res => res.json())
          .then(result => {
            console.log(result)
            return result,blob();
          })
       
    },
    title:`dolor sit amet consectetur adipisicing elit} ` ,
    details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea molestiae laboriosam iste excepturi. Doloribus iste enim vel delectus tenetur earum expedita atque, minima culpa, nulla vitae facilis minus in quo?' 
   },
   {
    id:Date.now(),
    title:`dolor2 sit amet consectetur adipisicing elit} ` ,
    details:'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Ea molestiae laboriosam iste excepturi. Doloribus iste enim vel delectus tenetur earum expedita atque, minima culpa, nulla vitae facilis minus in quo?' 
   },
   {
    id:Date.now(),
    title:`dolor3 sit amet consectetur adipisicing elit} ` ,
    details:'Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Ea molestiae laboriosam iste excepturi. Doloribus iste enim vel delectus tenetur earum expedita atque, minima culpa, nulla vitae facilis minus in quo?' 
   },
   {
    id:Date.now(),
    title:`dolor4 sit amet consectetur adipisicing elit} ` ,
    details:'Lorem4 ipsum dolor sit amet consectetur adipisicing elit. Ea molestiae laboriosam iste excepturi. Doloribus iste enim vel delectus tenetur earum expedita atque, minima culpa, nulla vitae facilis minus in quo?' 
   },
   {
    id:Date.now(),
    title:`dolor5 sit amet consectetur adipisicing elit} ` ,
    details:'Lorem5 ipsum dolor sit amet consectetur adipisicing elit. Ea molestiae laboriosam iste excepturi. Doloribus iste enim vel delectus tenetur earum expedita atque, minima culpa, nulla vitae facilis minus in quo?' 
   },
 ,
]

const newsStore = document.querySelector('.news-store');
let html = ''

store.map(news =>{
    let htmlSegment=`<div class="store-news-card">
    <img id="newsImage" src="${store.imageURL}" alt="">
   <div class="store-social-container">
    <h1 class="date-eddited">11/5/2015</h1>
    <div class=" store-social">
      
      <p><i class="fa-solid fa-thumbs-up"></i> <span>22k</span></p>
      <p><i class="fa-solid fa-share-nodes"></i> <span>30</span></p>

    </div>
   </div>
    
    <h1 class="store-news-title">${news.title}</h1>
  </div>`;
  html+=htmlSegment;
})
newsStore.innerHTML=html;



