import React from 'react';
const NEUTRAL =0;
const LOVE = 1;
const HATE = -1;

class Like extends React.Component
{
    constructor(props) 
    {
      super(props);
      this.state =
      {
        like : NEUTRAL,
        message : "OSEF -_-"
      }
      this.displayMessage = this.displayMessage.bind(this);
    }
    displayMessage()
    {
        console.log("test display", this)
        if(this.state.like === NEUTRAL)
        {
            return "OSEF -_-";
        }
        else if(this.state.like === LOVE)
        {
            return "I LOVE THIS BAR <3";
        }
        else if(this.state.like === HATE)
        {
            return "FUCK THIS TRASH ! µ_µ";
        }
        return "ERROR WE SHOULD FIRE THE ADMIN o/";
    }
    render()
    {
        return (
            <div>
            <button onClick={this.setState({message : "I LOVE THIS BAR <3"})}>
                {this.state.message}
            </button>
            </div>

        )
    }
}

export default Like;