const content = "Easy Shepherd&#8217;s Pie sucky Shepherd&#8217;s bucky lucky";

const filterLength = (content, limit = 17) =>{
let contentArray = content.split(' ');
console.log(`contentArray:::::${contentArray}`);
const value = contentArray.reduce((acc, cur)=>{
if(acc.length + cur.length > limit){
       return acc
    console.log(`INSIDE:::::::::${acc}`)
}
acc = `${acc} ${cur}`;
console.log(`OUTSIDE::::::::${acc}`);
return `${acc} ${cur}`;;
});
 console.log(value.concat('...'));
}

//filterLength(content);



const limitRecipeTitle = (title, limit = 17) => {
    if (title.length > limit) {
   
      let charCount;
      
      return title.split(' ').reduce((result, word) => {
        // set initial charCount value
        if (!charCount) charCount = result.length;
          
        if (charCount + word.length + 1 <= limit) {
          charCount += word.length + 1; // + 1 adds room for a leading space
          return result.concat(` ${word}`);
        }
   
        charCount += word.length + 1;
        console.log(result);
                return result;
      }).concat(` ...`);
    }
    return title;
  };


 

  const filterLength1 = (content, limit = 17) => {
    let contentArray = content.split(' ');
    let tempArray = [];
    console.log(`contentArray:::::${contentArray}`);
    const value = contentArray.reduce((acc, cur)=>{
    if(acc + cur.length <= limit){
        tempArray.push(cur);
        console.log(`INSIDE:::::::::${cur}`)
    }

    return acc+cur;
    },'');
     console.log(tempArray);
    }

    filterLength1(content)