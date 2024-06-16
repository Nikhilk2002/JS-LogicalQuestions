function generateNumberTriangle(rows) {
    let startNum = 2;
    let currentNum = startNum;
    
    for (let i = 1; i <= rows; i++) {
      let line = "";
      
      for (let j = 1; j <= i; j++) {
        line += currentNum + " ";
        currentNum += 2;
      }
      
      console.log(line.trim());
    }
    
    for (let i = rows - 1; i >= 1; i--) {
      let line = "";
      
      currentNum -= (2 * (rows - i)); 
      for (let j = 1; j <= i; j++) {
        line += currentNum + " ";
        currentNum += 2;
      }
  
      console.log(line.trim());
    }
  }
  
  generateNumberTriangle(4);
  