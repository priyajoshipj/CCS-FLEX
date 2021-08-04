function getNoOfItem() {
    let noOfItems = document.querySelector('#noOfItems').value;
    if (noOfItems > 0 && noOfItems <= 30) {
        let gridArea = document.querySelector(".grid-area")
        let output = ''
        for (let i = 1; i <= +noOfItems; i++) {
            output = output + `<div class="item" id=${i}>${i}</div>`
        }
        gridArea.innerHTML = output
    } else {
        alert("Please enter value more than 0 and below than or equal to 30")
    }
}

function getDirectionValue() {
    let directionValue = document.getElementsByName("wrapProperty")
    directionValue.forEach((val) => {
        if (val.checked) {
            document.querySelector(".sub-container").style.flexWrap = val.value;
        }
    })
}

function getWidth() {
    let _width = document.querySelector("#child-width").value
    let child = document.querySelectorAll(".item")
    child.forEach((val)=>{
        val.style.width = _width+"px"
    })
}

function getHeight() {
    let _height = document.querySelector("#child-height").value
    let child = document.querySelectorAll(".item")
    child.forEach((val)=>{
        val.style.width =_height+"px"
    })
}