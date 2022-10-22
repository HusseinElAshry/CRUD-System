
var pName = document.getElementById("input1");
var pPrice = document.getElementById("input2");
var pCategory = document.getElementById("input3");
var pDescription = document.getElementById("input4");
var prodectPack;
if(JSON.parse(localStorage.getItem("ourStore"))==null)
{
    prodectPack = [];
}
else
{
    prodectPack =JSON.parse(localStorage.getItem("ourStore"));
    productDisplay();
}
function addProduct(index , selector)
{
    var packet =
    {
        pName : pName.value ,
        pPrice : pPrice.value ,
        pCategory : pCategory.value ,
        pDescription : pDescription.value ,
    }
    if (selector==true)
     {
        prodectPack.push(packet);
    } 
    else 
    {
        prodectPack.splice(index,1,packet) 
        document.getElementById("updateOrAdd").innerHTML = `<button class="btn btn-outline-primary"onclick="addProduct(0 , true)">Add Product</button>`;
    }
    localStorage.setItem("ourStore" , JSON.stringify(prodectPack));
    productDisplay();
    clear();
}
function clear()
{
    pName.value="";
    pPrice.value="";
    pCategory.value="";
    pDescription.value="";
}
function productDisplay()
{
    var resultant =``;
    for(var i = 0 ; i< prodectPack.length ;i++)   
    {
        resultant+=
        `
        <tr>
            <td>${prodectPack[i].pName}</td>
            <td>${prodectPack[i].pPrice}</td>
            <td>${prodectPack[i].pCategory}</td>
            <td>${prodectPack[i].pDescription}</td>
            <td><button class="btn btn-warning"onclick="visualUpdateProduct(${i})">update</button></td>
            <td><button class="btn btn-danger"onclick="deleteProduct(${i})">delete</button></td>
        </tr>
       `
    }
    document.getElementById("product").innerHTML = resultant;

}
function deleteProduct( X ) {
    prodectPack.splice(X,1)
    localStorage.setItem("ourStore" , JSON.stringify(prodectPack));
    productDisplay()
}
function visualUpdateProduct( X ) {
    pName.value = prodectPack[X].pName;
    pPrice.value = prodectPack[X].pPrice;
    pCategory.value = prodectPack[X].pCategory;
    pDescription.value = prodectPack[X].pDescription; 
    document.getElementById("updateOrAdd").innerHTML = ` <button class="btn btn-outline-info"onclick="addProduct(${X} , false)">Update Product</button> `;
}
function searchKey(userWord) {
    var resultant="";
    for(var i = 0 ; i < prodectPack.length ; i++)
    {
        if(prodectPack[i].pName.toLowerCase().includes(userWord.toLowerCase()))
            {
                resultant+=
                `
                <tr>
                    <td>${prodectPack[i].pName}</td>
                    <td>${prodectPack[i].pPrice}</td>
                    <td>${prodectPack[i].pCategory}</td>
                    <td>${prodectPack[i].pDescription}</td>
                    <td><button class="btn btn-warning"onclick="visualUpdateProduct(${i})">update</button></td>
                    <td><button class="btn btn-danger"onclick="deleteProduct(${i})">delete</button></td>
                </tr>
               `
            }
    }
    document.getElementById("product").innerHTML = resultant;
}