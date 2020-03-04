var drgitem = document.querySelectorAll(".drag-item")
var drpArea = document.querySelector(".dropArea")
for (var drg of drgitem){
    drg.addEventListener("dragstart",function(e){
        this.style = "background:#ccc";
        e.dataTransfer.setData("dId", this.id)
    })
    drg.addEventListener("dragleave", function() {
        this.style = "background:transparent"
        })
}

drpArea.addEventListener("dragover", function(e) {
    e.preventDefault();
})

drpArea.addEventListener("drop", function(e) {
    e.preventDefault();
    var dragId = e.dataTransfer.getData("dId")
    var ditem = document.getElementById(dragId)
    drpArea.appendChild(ditem)
    ditem.style = "background:green; color:#fff"
})