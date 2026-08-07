const rows = 10;
const cols = 5;

const sheet = document.getElementById("sheet");

const table = document.createElement("table");

const data = JSON.parse(localStorage.getItem("sheet")) || [];

for(let i=0;i<=rows;i++){

    const tr = document.createElement("tr");

    for(let j=0;j<=cols;j++){

        if(i===0 && j===0){

            const th=document.createElement("th");
            tr.appendChild(th);
        }

        else if(i===0){

            const th=document.createElement("th");
            th.innerText=String.fromCharCode(64+j);
            tr.appendChild(th);
        }

        else if(j===0){

            const th=document.createElement("th");
            th.innerText=i;
            tr.appendChild(th);
        }

        else{

            const td=document.createElement("td");

            td.contentEditable=true;

            td.dataset.row=i-1;
            td.dataset.col=j-1;

            if(data[i-1]){
                td.innerText=data[i-1][j-1] || "";
            }

            td.addEventListener("input",saveData);

            td.addEventListener("click",()=>{

                document
                .querySelectorAll("td")
                .forEach(cell=>cell.classList.remove("selected"));

                td.classList.add("selected");

            });

            td.addEventListener("keydown",moveCell);

            tr.appendChild(td);

        }

    }

    table.appendChild(tr);

}

sheet.appendChild(table);


function saveData(){

    const arr=[];

    const trs=document.querySelectorAll("tr");

    trs.forEach((tr,index)=>{

        if(index===0) return;

        const row=[];

        tr.querySelectorAll("td").forEach(td=>{

            row.push(td.innerText);

        });

        arr.push(row);

    });

    localStorage.setItem("sheet",JSON.stringify(arr));

}

document
.getElementById("saveBtn")
.addEventListener("click",saveData);

document
.getElementById("clearBtn")
.addEventListener("click",()=>{

    localStorage.removeItem("sheet");

    document
    .querySelectorAll("td")
    .forEach(td=>td.innerText="");

});

function moveCell(e){

    const row=Number(this.dataset.row);
    const col=Number(this.dataset.col);

    let next;

    if(e.key==="ArrowRight"){

        next=document.querySelector(
        `[data-row="${row}"][data-col="${col+1}"]`);

    }

    else if(e.key==="ArrowLeft"){

        next=document.querySelector(
        `[data-row="${row}"][data-col="${col-1}"]`);

    }

    else if(e.key==="ArrowDown"){

        next=document.querySelector(
        `[data-row="${row+1}"][data-col="${col}"]`);

    }

    else if(e.key==="ArrowUp"){

        next=document.querySelector(
        `[data-row="${row-1}"][data-col="${col}"]`);

    }

    if(next){

        e.preventDefault();

        next.focus();

        document
        .querySelectorAll("td")
        .forEach(td=>td.classList.remove("selected"));

        next.classList.add("selected");

    }

}

const box=document.getElementById("box");

let dragging=false;

box.addEventListener("mousedown",()=>{

dragging=true;

});

document.addEventListener("mouseup",()=>{

dragging=false;

});

document.addEventListener("mousemove",(e)=>{

if(dragging){

box.style.left=e.pageX+"px";

box.style.top=e.pageY+"px";

}

});