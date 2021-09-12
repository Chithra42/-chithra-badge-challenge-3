
const rankingsBody=document.querySelector("#rankings-table>tbody")
function loadRankings(){setTimeout(() => {
    const request= new XMLHttpRequest()
    request.open("get","rankings.json")
    request.onload=()=>{
        const json =JSON.parse(request.responseText)
        populateRankings(json)
    }
    request.send()
}, 2000);
    
}
function populateRankings(json){
    
    json.forEach((row) => {
        const tr=document.createElement("tr")
        row.forEach((cell)=>{
            const td=document.createElement("td")
            td.textContent=cell
            tr.appendChild(td)
        })
        rankingsBody.appendChild(tr)
    });
}
// document.addEventListener("DOMContentLoaded",()=>{loadRankings()}
document.write(loadRankings())