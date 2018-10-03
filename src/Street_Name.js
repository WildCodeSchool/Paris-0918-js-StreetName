import React from 'react';

class StreetName extends React.Component{
    render(){
        return(

           <form onSubmit={this.props.getStreetName}>
               <input type="text" name="rue" placeholder="tkt on est pas facebook on va simplement te tracer toute ta vie.com" />
               <button>un bouton pas trop design en vrai mais bon on fait avec ce qu'on a bref la suite</button>
           </form>
       
        );
    }
}

export default StreetName;