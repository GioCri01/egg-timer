
export const timeEgg = (egg)=>{
   let temp = 0;
   if (egg.size ==="S"||egg.size ==="M") {
        temp+=30;
   }else if(egg.size ==="L"||egg.size ==="XL"){
    temp+=50
   }

   if (egg.baking ==="hard") {
    temp+=50
   }else if(egg.baking ==="soft"||egg.baking ==="medium"){
    temp+=30
   }

   if (egg.temp <= 50) {
     temp-=10
   }else if(egg.temp > 50){
    temp-=25
   }

  //  if (egg.size === undefined && egg.baking===undefined && egg.temp ===0) {
  //   temp = 0
  //  }

   if(egg.size === undefined || egg.baking === undefined || egg.temp === 0){
    temp = 0
   }
   return temp
}