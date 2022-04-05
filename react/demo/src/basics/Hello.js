
// Function component 
export default function Hello() {
    var name = "Srikanth"
    var message = "Good Evening"
    var hours  = new Date().getHours()
    if (hours < 12)
       message = "Good Morning"
    else
      if(hours < 17)
         message = "Good Afternoon"

    // code
    return (
        <div>
            <h1 className="text-primary">{message} {name} </h1>
        </div>
    )
}