
function Counter(){
    // let c=0;
    return (
    function(c)
    {
        console.log(++c)
    }
        )
     }
let count=Counter();
count(4)
count(5)

