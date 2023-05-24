//child inner function has access to parent(outer func) scope
function myfunc()
{
    var name="prashant"

    function childFunc()
    {
        console.log("this value "+name)
    }
    childFunc();
}

myfunc();