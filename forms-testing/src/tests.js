window.onload = function() {
    let dateValidate = document.getElementById("dateError");
    let addProduct = document.getElementById("addProduct");
    dateValidate.style.display = "none";
    addProduct.disabled = true;

    document.getElementById("dateSupplied").onkeyup = function() {
        let datereg = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
        if(this.value.match(datereg)){
            dateValidate.style.display = "none"; 
            addProduct.disabled = false;          
        }else{
            dateValidate.style.display = "block"; 
            addProduct.disabled = true;
        }
    }
}