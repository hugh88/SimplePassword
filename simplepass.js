//type checkString below
function checkString(str){
  if(str.length < 8 || str.length > 20){
    throw new RangeError("Not Valid");
  }
  else{
    return str;
    console.log("You Good.")
  }
}
//type getString below
function getString(str){
  try{
    str = checkString(str);
  }
  catch(e){
    console.log("You Dumb!");
    getString(str);
  }
}
checkString("Password123");
