function startBuy(){
      const hederRemove = document.getElementById('header');
      hederRemove.classList.add('hidden');
}

 let count =1 ;
 let totalPrice = 0;
const cards = document.querySelectorAll('.card-1');
for(const card of cards){
      card.addEventListener('click',function(){
            const title = card.querySelector('h2');
            const text = title.innerText;

            const itemsContiner =document.getElementById('items-continer');
            
            
            const p = document.createElement('li');
            
            p.innerText = text;
            
            itemsContiner.appendChild(p);

           
            
           
            
            count++;

            

            const priceTag = card.querySelector('h3');
           const priceText = priceTag.innerText ;
           const value =priceText.split(' ')[0];
           const finalValue = parseFloat(value);

          totalPrice = totalPrice +finalValue;
          

          const fastPrice = document.getElementById('total');
          fastPrice.innerText=      `${totalPrice} taka`
          console.log(fastPrice);


         
          

           
          
            
            
            
      })
}

 const btn =document.getElementById('apply-buton');
 btn.addEventListener('click',function(){
      const infeild = document.getElementById('input-feild');
      const value = infeild.value;
      infeild.value ='';
      const text = value.toUpperCase();
      if(text === 'SELL200'){
           
            if(totalPrice>=200){
                  const discountPrice = totalPrice * 0.2 ;
                  const discountTag = document.getElementById('discount');
                  discountTag.innerText=discountPrice;
                  const currentPrice = totalPrice - discountPrice ;
                  const finalScore = document.getElementById('total-feild');
                  finalScore.innerText = currentPrice.toFixed(2);
                  
                  
                  
                  
            }
            else{
                  alert ('buy more');
            }
            
            

      }
      else{
            alert ('please enter valid promo code');
      }
 })

 
      document.getElementById('buy-btn').addEventListener('click',function(){
            if(totalPrice>0){
                  const congratulationSection = document.getElementById('last-section');
            congratulationSection.classList.remove('hidden');
            const hederSection = document.getElementById('header');
            hederSection.classList.add('hidden');
            const mainContainer = document.getElementById('main-container');
            mainContainer.classList.add('hidden');
            const footerSection = document.getElementById('footer-section');
            footerSection.classList.add('hidden')

           

            }
            
       })

       let lastCount = 1; 

       function home(){
            const congratulationSection = document.getElementById('last-section');
            congratulationSection.classList.add('hidden');
            const hederSection = document.getElementById('header');
            hederSection.classList.remove('hidden');
            const mainContainer = document.getElementById('main-container');
            mainContainer.classList.remove('hidden');
            const footerSection = document.getElementById('footer-section');
            footerSection.classList.remove('hidden')
            const fastPrice = document.getElementById('total');
            fastPrice.innerText=      ` 0taka`
            const discountTag = document.getElementById('discount');
            discountTag.innerText= '0';
            const finalScore = document.getElementById('total-feild');
            finalScore.innerText = '0';

            const itemsContiner =document.getElementById('items-continer');
            itemsContiner.innerText = '';
            
            

            
            
            
            


           
           

            

            
            
           
          
            // lastCount++;

       }
 

