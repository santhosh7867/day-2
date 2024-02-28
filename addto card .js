<h1>ADD TO CART</h1>
    <input type="text" id="cart"/>
     <button onclick="func()">ADD</button>
     <h4>MY CART ITEMS</h4>
     <ul id="list"></ul>
     
     <script>
            function func(){
          let val=document.getElementById("cart").value 
          let unord=document.getElementById("list")
          unord.innerHTML+="<li>"+val+"</li>"
          let value=document.getElementById("cart").value=""
        }