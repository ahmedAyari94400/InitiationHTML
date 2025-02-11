// Horoscope

const horoscope = [
    {
      sign: 'Bélier',
      description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
    },
    {
      sign: 'Taureau',
      description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
    },
    {
      sign: 'Gémeaux',
      description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
    },
    {
      sign: 'Cancer',
      description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
    }
  ];

  for (let i =0; i < horoscope.length;i++)
  {
    //On assigne des variables dans lesquels on cré des éléments à intégrer dans le body
    let newArt= document.createElement("article");
    let newH = document.createElement("h2");
    let newP = document.createElement("p");

    // On intègre ces variables dans le body
    document.body.appendChild(newArt); 
    document.body.appendChild(newH);
    document.body.appendChild(newP);
    

    //On visualise l'horoscope dans la console
  console.log(horoscope[i].sign+ " "+horoscope[i].description);  

  }