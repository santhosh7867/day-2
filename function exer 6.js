function Grade(name, marks){
    if(marks >= 90 && marks <= 100){
      console.log(`${name}  S grade`)
    }
    else if(marks >= 80 && marks < 90){
      console.log(`${name}  A grade`)
    }
    else if(marks >= 70 && marks < 80){
      console.log(`${name}  B grade`)
    }
    else if(marks >= 60 && marks < 70){
      console.log(`${name}  C grade`)
    }
    else if(marks >= 50 && marks < 60){
      console.log(`${name}  D grade`)
    }
    else if(marks >= 40 && marks < 50){
      console.log(`${name}  E grade`)
    }
    else if(marks >= 0 && marks <40){
      console.log(`${name} Failed`)
    }
    else{
      console.log(`Invalid marks of ${marks}`)
    }
    }
    Grade("raul", 91) 
    Grade("raul", 85) 
    Grade("raul", 73) 
    Grade("raul", 53) 
    Grade("raul", 20) 
    Grade("raul", 120) 