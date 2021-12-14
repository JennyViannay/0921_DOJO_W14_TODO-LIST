# TODO List from Scratch - DOJO W14 

## Modéliser une base de données qui permettrait d'administrer une todo liste par catégories et pas priorité

### Une todo type comporte :
- un titre 
- une description
- une priorité (low, medium, high)
- un état (todo, wip, done)

### Une fois que votre base de données est modélisée :
- inserer quelques todos : 
  - title : Cadeau maman
  - description : https://www.idealista.it/fr/immobile/18024865/
  - priorité : high
  - complété : todo
  
  - title : Veille technique sur Redux
  - description : https://redux.js.org/
  - priorité : low
  - état : wip
  
  - title : RDV client 
  - description : https://meet.google.com/adj-afwf-jmi
  - priorité : medium
  - état : done

### Créer les entrypoints  :
- sur l'url 'api/todo/change-state' on peut changer l'état d'une TODO 
- sur l'url 'api/todo/list' on peut récupérer toutes les TODO de la date la plus récente à la plus ancienne 

### FRONTEND REACT APP CLIENT
- Créer un component qui affiche toutes les todos 
- Dans ce même component : ajouter un systeme de filtre qui permettent de trier les TODOS par État (todo - wip - done) 
- Pour une meilleure experience utilisateur, vous êtes libre d'imaginer un display spécifique des todos card en fonction de leur état, exemple:
  - todo - rouge
  - wip - orange
  - done - blue
- Ou de leur priorité, exemple: 
  - low - blue
  - medium - orange
  - high - red

### BONUS
  - Ajouter les entrypoints serveur pour ajouter / supprimer / updater une TODO  
  - Côté client : ajouter un form component pour ajouter / updater une TODO + ajouter la possibilité à l'utilisateur de supprimer une TODO


### Tips : 
- Pour vous éviter de recréer un serveur Node/Express de zéro, vous pouvez utiliser le template suivant :
[Express Template](https://github.com/JennyViannay/MVC_Express_Template "Express Template")
