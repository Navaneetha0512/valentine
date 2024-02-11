const mine=document.querySelector(".mine");
        const wrapper=document.querySelector('.wrapper');
        const propose=document.querySelector(".propose");
        const question=document.querySelector(".question");
        const yesBtn = document.querySelector(".yes-btn");
        const noBtn = document.querySelector(".no-btn");
        const hrt=document.querySelector("#hrt");
        
        // const wrapperRect=wrapper.getBoundingClientRect();
        // const noBtnRect=noBtn.getBoundingClientRect();
        
        
        yesBtn.addEventListener('click',()=>{
            // console.log("yes clicked");
           let display = wrapper.classList.toggle("true")
           
           if (display) {
            wrapper.style.display="none";
            mine.style.display="block";
            alert("aww... you are soooo sssswwweeeettt.....");
           }
           else{
            wrapper.style.display="block";
            mine.style.display="none";
           }
        
        });
        
        // noBtn.addEventListener('mouseover',()=>{
        //     const i=Math.floor(Math.random()*(wrapperRect.width-noBtnRect.width))+1;
        //     const j=Math.floor(Math.random()*(wrapperRect.height-noBtnRect.height))+1;
        //     noBtn.style.left=i+'px';
        //     noBtn.style.top=j+'px'  ;
        // })
        
        noBtn.addEventListener( 'click', () => {
            wrapper.style.display="none";
            mine.style.display="block";
            propose.innerHTML='Samputha....😡'
            hrt.style.display="none"
        })