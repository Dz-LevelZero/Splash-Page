const { body } = document;

const changeBackground = (number) => {
  // Check if Background is already showing
  let previousBackground;
  if (body.className){
    previousBackground = body.className;
  }
  // Reset Css background
  body.className= "";
  switch (number) {
    case "1":
      return(previousBackground === "background-1" ? "" : body.className = "background-1");
    case "2":
      return(previousBackground === "background-2" ? "" : body.className = "background-2");
    case "3":
      return(previousBackground === "background-3" ? "" : body.className = "background-3");
        
    default:
      break;
  }
}