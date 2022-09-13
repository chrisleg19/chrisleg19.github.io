
        //1. Create a new variable called 'total' and assign it the div with the id of 'total'

        let total = document.querySelector("#total")
        // converting the text content of <div id="total">0</div> to a number
        let totalNum = Number(total.textContent)
        
        //2. Create Six Functions (add, subtract, multiplyBy2, divideby2, multiplyBy5, divideBy5)
        // Example: 
        //function add(){
            //update the value of the total variable textContent
            // use an alert to alert the user
        //}

        const add = () => {
            alert(totalNum += 1)
            total.textContent = totalNum}
        const subtract = () => {alert(totalNum-=1)
            total.textContent = totalNum}
        const multiplyBy2 = () => {alert(totalNum *= 2)
            total.textContent = totalNum}
        const divideBy2 = () => {alert(totalNum /= 2)
            total.textContent = totalNum}
        const multiplyBy5 = () => {alert(totalNum *= 5)
            total.textContent = totalNum}
        const divideBy5 = () => {alert(totalNum /= 5)
            total.textContent = totalNum}

        //3. Attach Functions to Buttons

        const addBtn = document.querySelector("#add")
        const subBtn = document.querySelector("#subtract")
        const mult2Btn = document.querySelector("#mult-2")
        const div2Btn = document.querySelector("#div-2")
        const mult5Btn = document.querySelector("#mult-5")
        const div5Btn = document.querySelector("#div-5")

        addBtn.addEventListener("click", add)
        subBtn.addEventListener("click", subtract)
        mult2Btn.addEventListener("click", multiplyBy2)
        div2Btn.addEventListener("click", divideBy2)
        mult5Btn.addEventListener("click", multiplyBy5)
        div5Btn.addEventListener("click", divideBy5)