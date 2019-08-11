// const fortniteStoreData = require("../__mock__/fortniteStore.json")

// console.log(fortniteStoreData);

// fortniteStoreData.data.forEach(item => {
//   console.log(item.item.name + ":" + item.store.cost + " VBUX" + "($"+(item.store.cost/100)+")")  
// })

$(document).ready(function (){
    console.log(fortniteData);
    fortniteData.data.forEach(item => {
        $("#items").append("<p>"+item.item.name+"</p>")
    })
})