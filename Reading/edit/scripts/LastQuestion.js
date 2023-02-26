console.log("asdasdjsgfijsd")

let dragElements = document.getElementById("drag-elements")
let dropTarget = document.getElementById("drop-target")
dragula([dragElements , dropTarget] , {
    revertOnSpill: true,
}).on("drop" , (el) => {
  console.log(el)
})