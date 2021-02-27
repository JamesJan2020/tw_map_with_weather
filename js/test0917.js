var aa = document.querySelectorAll('#btn')
console.log(aa)
var bb = document.querySelectorAll('.item')
console.log(bb)

let firstTime = true
function pick() {
   if (firstTime == true) {
      bb[0].style.display = 'block'
      firstTime = false
      console.log(this)
   }
   else if (firstTime == false) {
      bb[0].style.display = 'none'
      firstTime = true
   }

}

for (i = 0; i < aa.length; i++) {
   aa[i].addEventListener('click', pick)
}

