
const palindrom = (content) =>{
   
    let isi = []
   let kata = ''
    for(let i = content.length - 1; i  >= 0; i--){
        
        let awal = i;
        let akhir = content.length - i - 1;
      
        let kata = content.toLowerCase()
        if(kata.charAt(awal) !== kata.charAt(akhir)){
        return false

        }else{
           return true
        }
    
    }
  
}
console.log(palindrom("ada"))
console.log(palindrom("adam"))
console.log(palindrom("Ada"))
console.log(palindrom("MadAm"))


