function checkYuGiOh(n){
    let arr = []
     if (isNaN(n)===true){
         //  checking for n, it is a number or not
         
          if (Array.isArray(n)===true){
              console.log("invalid parameter: " + JSON.stringify(n));
              return n;
           } else if (typeof(n)==="object"){
              console.log("invalid paramter: " + JSON.stringify(n));
              return n;
           } else {
              console.log("invalid paramter: " + JSON.stringify(n));
              return n;
           }
       }
    //    looping through the arrays..
    for(i = 1; i<=n; i++){
      if (i%2===0 && i%3===0 && i%5===0){
          //  checking if it's divisible by 2, 3, and 5...
                    arr.push("yu-gi-oh");
                  }else  if (i%2===0 && i%3===0){
                      //  checking if it's divisible by 2 and 3...
                     arr.push("yu-gi");
                  }else  if (i%2===0 && i%5===0){
                      //  checking if it's divisible by 2, and 5...
                     arr.push("yu-oh");
                  } else  if (i%3===0 && i%5===0){
                      //  checking if it's divisible by  3 and 5...
                     arr.push("gi-oh");
                  } else  if (i%5===0){
                      //  checking if it's divisible by 5 only...
                     arr.push("oh");
                  } else  if (i%3===0){
                      //  checking if it's divisible by 3 only...
                     arr.push("gi");
                  } 
                  else  if (i%2===0){
                      //  checking if it's divisible by 2 only...
                     arr.push("yu");
                  } 
                  else {
                     arr.push(i);
                  }
                console.log(arr);
    }
  }
  checkYuGiOh("htfvf fvfv");