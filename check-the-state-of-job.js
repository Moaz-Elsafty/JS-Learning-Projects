
// function showDetails (a, b, c) {
//     document.write("<div>")
//         let Name;
//         let Age;
//         let Bool;
//         //checking if string
//         if(typeof(a)  === "string") {
//             Name = a;
//         } else if (typeof(b) === "string") {
//             Name = b;
//         } else if (typeof(c) === "string") {
//             Name = c;
//         }
//         // checking if a number
//         if (typeof(a) === "number") {
//             Age = a;
//         } else if (typeof(b) === "number") {
//             Age = b;
//         } else if (typeof(c) === "number") {
//             Age = c;
//         }
//         //checking if a boolean value
//         if (typeof(a) === "boolean") {
//             Bool = a;
//         } else if (typeof(b) === "boolean") {
//             Bool = b;
//         } else if (typeof(c) === "boolean") {
//             Bool = c;
//         }
//         if (Bool === true) {
//             document.write(`<p>Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire </p>`)
//         } else {
//             document.write(`<p>Hello ${Name}, Your Age Is ${Age}, You Are Not Aviable For Hire</P>`)
//         }
        
//     document.write("</div>")
// }

// showDetails("Hossam", true, 25);
// The Code Is Going great

// Doing Inhancments on  the code above

function showDetails (a, b, c) {
    document.write("<div>")
        let Name;
        let Age;
        let Bool;
        let jobReq = [a, b, c]
        
        for (i = 0; i < jobReq.length; i++) {
            if(typeof(jobReq[i])  === "string") {
                Name = jobReq[i];
            }
            if (typeof(jobReq[i]) === "number") {
                Age = jobReq[i];
            }
            if (typeof(jobReq[i]) === "boolean") {
                Bool = jobReq[i];
            }

        }
        if (Bool === true) {
            document.write(`<p>Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire </p>`)
        } else {
            document.write(`<p>Hello ${Name}, Your Age Is ${Age}, You Are Not Aviable For Hire</P>`)
        }
        
    document.write("</br></div>")
}

showDetails(15, true, "Mezo");




