//DONT USE ANY IN TS




// let hero;
// function getHero(){
//     return "Azlan Ali Baig"
// }

// hero = getHero()

// console.log(hero)


// ye jo code hai uppar wala ismay menay hero variable ki type define nahi karey to isnay automatically "any" type lele jokay hamay avoid karney hutey hai, any he ka agar use karna thaa to typeScript use he q kia hamnay?

let hero:string;
function getHero(){
    return "Azlan Ali Baig"
}

hero = getHero()

console.log(hero)