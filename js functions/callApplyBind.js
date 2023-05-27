const myobj = {

    name: "coder",
    myfunc: function (thing) {
        console.log(this.name +" "+ "says hello " + thing);
    }
}

const secondObj = {
    name: "Prashant"
}

myobj.myfunc.call(secondObj, "world")

 myobj.myfunc.apply(secondObj, ["world"])

const bindFunc = myobj.myfunc.bind(secondObj)

bindFunc("world")