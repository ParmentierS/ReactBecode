
import React, { Component } from 'react';

export default class Welcome extends Component 
{
    render() 
    {
        return (
            <section className="App">
                <p>Welcome {this.props.param} ! </p>
            </section>
        );
    }
}

/*
    import React, { Component } from 'react'; 
    -> Import de la librairie react installer dans le dossier node_modules.
    export default class Welcome extends Component 
    -> Création de la class et export de la classe pour l'imbriquer dans d'autres components
    render() 
    -> fonction dans react qui fais renvoie la vue.
    <div className="App"> 
    -> className est la même chose que class en html mais react utilise deja le mot class donc petit changement (le comportement est le même)
    (Par convention, le nom du component, le nom du fichier, le nom de l'import,...
     s'appel de la même manière et commence par une majuscule pour faire plus simple)
*/