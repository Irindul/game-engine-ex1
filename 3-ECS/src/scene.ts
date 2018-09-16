import { IEntity, Entity } from './entity';
import { IComponent } from './components';

// # Interface *ISceneWalker*
// Définit le prototype de fonction permettant d'implémenter
// le patron de conception [visiteur](https://fr.wikipedia.org/wiki/Visiteur_(patron_de_conception))
// sur les différentes entités de la scène.
export interface ISceneWalker {
  (entity: IEntity, name: string): Promise<any>;
}

// # Interfaces de description
// Ces interfaces permettent de définir la structure de
// description d'une scène, telle que normalement chargée
// depuis un fichier JSON.
export interface IComponentDesc {
  [key: string]: any;
}

export interface IEntityDesc {
  components: IComponentDesc;
  children: ISceneDesc;
}

export interface ISceneDesc {
  [key: string]: IEntityDesc;
}

// # Classe *Scene*
// La classe *Scene* représente la hiérarchie d'objets contenus
// simultanément dans la logique du jeu.
export class Scene {
  static current: Scene;

  // ## Fonction statique *create*
  // La fonction *create* permet de créer une nouvelle instance
  // de la classe *Scene*, contenant tous les objets instanciés
  // et configurés. Le paramètre `description` comprend la
  // description de la hiérarchie et ses paramètres. La fonction
  // retourne une promesse résolue lorsque l'ensemble de la
  // hiérarchie est configurée correctement.
  static create(description: ISceneDesc): Promise<Scene> {
    const scene = new Scene(description);
    Scene.current = scene;
    throw new Error('Not implemented');
  }

  private constructor(description: ISceneDesc) {
    throw new Error('Not implemented');
  }

  // ## Fonction *findObject*
  // La fonction *findObject* retourne l'objet de la scène
  // portant le nom spécifié.
  findObject(objectName: string): IEntity {
    throw new Error('Not implemented');
  }

  // ## Méthode *walk*
  // Cette méthode parcourt l'ensemble des entités de la
  // scène et appelle la fonction `fn` pour chacun, afin
  // d'implémenter le patron de conception [visiteur](https://fr.wikipedia.org/wiki/Visiteur_(patron_de_conception)).
  walk(fn: ISceneWalker): Promise<any> {
    throw new Error('Not implemented');
  }
}
