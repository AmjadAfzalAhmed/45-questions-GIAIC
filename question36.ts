function make_shirt(cloth:string, color:string,make:string){
    return `The custom T-Shirt: is made of ${cloth} and its ${color} colored with brand ${make}` 
}

let t_shirt = make_shirt ('flannel', 'blue','GIAIC!!');
console.log(t_shirt);
