let cl=console.log

   const buttonclick=document.getElementById('buttonclick')
   const backdrop=document.getElementById("backdrop");
   const ourmodel=document.getElementById("ourmodel");
   const modelclose=[...document.querySelectorAll('.modelclose')]
   const moviecontainer=document.getElementById('moviecontainer');
   const movieform=document.getElementById('movieform')
   const holder=document.getElementById('holder');
   const titlecontrol=document.getElementById('title');
   const imgurlcontrol=document.getElementById('imgurl');
   const ratingcontrol=document.getElementById('rating')

    let moviearr=[];
   
const templating = (arr) =>{
      let result =[];
     arr.forEach(ele=>{
         result+=  `
          <div class="col-md-4 text-capitalize">
              <div class="card" id="holder">
                  <div class="card-header">
                      <h3>${ele.title}</h3>
                  </div>
                  <div class="card-body">
                      <figure class="imgholder m-0">
                          <img src="${ele.url}" alt="">
                          <figcaption>
                          <p>rating ${ele.rating}/5</p>
                          </figcaption>
                      </figure>
                  </div>
                  <div class="card-footer">
                      <div class="btn btn-primary">Add</div>
                      <div class="btn btn-danger">cancel</div>
                  </div>
              </div>
          
      </div>`
     })
        moviecontainer.innerHTML = result;

    }

    templating(moviearr);

const onclick = () => {
   backdrop.classList.toggle('active');
   ourmodel.classList.toggle('active');
   
}

const moviesubmit = (eve) => {
      eve.preventDefault()
      let movieobj = {
        title : titlecontrol.value,
        url : imgurlcontrol.value,
        rating : ratingcontrol.value,
      }

      moviearr.push(movieobj)
      cl(movieobj)
      templating(moviearr)
      onclick()

}

   cl(moviearr)
    
//    localStorage.setItem("key",JSON.stringify(moviearr))



    movieform.addEventListener('submit',moviesubmit)
 
    buttonclick.addEventListener("click", onclick)
    modelclose.forEach(obj => {
         obj.addEventListener("click", () => {
              onclick();
           
          
         })
    })

    
//    let convart= JSON.stringify(moviearr);
   
   
//    moviecontainer.innerText=localStorage.setItem( "key",moviearr)

       cl(convert)