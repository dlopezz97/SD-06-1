// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    this.printMail=()=>{
    console.log(newMail.subject + ": " + newMail.message)
    }
  }
  const newMail = new Mail(process.argv[2],process.argv[3] )
  newMail.printMail();
  // Type your code above this line!
  
  