import React,{Component} from 'react'

export default class QCM extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    question(value,...option){
        return(
            <div>
                <h2>{value}</h2>
                <ul>
                    {option.map((value,index) => {
                        <li>Reponse {index} : {value}</li>
                    })}
                </ul>
            </div>
        );
    }
    render() {
        return (
            <div>
                {question("Question 1","A","B","C")}
            </div>
        );
    }
}