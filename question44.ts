let sandwiches:string [] = ['chicken sandwich','egg sandwich','seafood sandwich'];

function sandwichIngredients(...components){
    console.log(`In order to make sandwich, we require multiple things i.e. ${components.join(' , ')}`);
}// we have used rest parameters (...) inside the function to take multiple elements
sandwichIngredients("bread","chicken", "egg","seafood", "beef" , "etc.");
