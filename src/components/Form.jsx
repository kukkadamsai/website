import React, { Component } from 'react';
import * as emailjs from 'emailjs-com'
import { template } from '@babel/core';
import { throwStatement, restElement } from '@babel/types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: '',
            clientEmail: '',
            clientHouseAge: '',
            clientAddress: '',
            problem: false,
            knowProb: 'No',
            clientQuestion: '',
            problemDesc: ''
          };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]:value});

    }

    handleSubmit(event){
        
        //console.log(this.state);
        const { clientName, clientEmail, clientHouseAge, clientAddress, problemDesc, clientQuestion } = this.state;
        let message = {
            clientHouseAge,
            clientAddress
        }
        let templateParams = {
            from_name: clientName,
            to_name: 'spencer.comora@gmail.com',
            message_html:   'Client name:\t'+ clientName + '\n'
                            + 'Client email:\t' + clientEmail + '\n'
                            + 'Client address:\t' + clientAddress + '\n'
                            + 'Client house age:\t' + clientHouseAge + '\n'
                            + 'Client problem description:\t' + problemDesc + '\n'
                            + 'Client question:\t' + clientQuestion

            
        }
        console.log(templateParams);
        // emailjs.send(
        //     'spencer_gmail',
        //     'template_XadAOTCZ',
        //      templateParams,
        //     'user_M6kLPVJil1znauH2TGfwg'
        // );
        event.reset();
        event.preventDefault();
        
    }
    
    render() { 
        return (
            <form id="contactForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        Name:
                        <input id="name" name="clientName" type="text" onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input id="email" name="clientEmail" type ="text" onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Address:
                        <input id="address" name="clientAddress" type="text" onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        House Age:
                        <input id="houseAge" name="clientHouseAge" type="text" onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="form-group">
                    <p>
                        Do you know the problem with your Water?
                    </p>
                        <label>
                            No {' '}
                            <input name="knowProb"type="radio" value="No" defaultChecked onClick={this.handleChange}/>
                        </label>
                        <label className ="m-2">
                            Yes {' '}
                            <input name="knowProb" type="radio" value="Yes" onClick={this.handleChange}/>
                        </label>

                </div>
                <div className="form-group">
                    {this.state.knowProb==="Yes"? <label> Please describe your problem<input name ="problemDesc"type="text" onChange={this.handleChange}/></label>:
                    <span/>}
                </div>
                <div className="form-group">
                    <label>Please upload any relevent information
                        <input type="file"/>                        
                    </label>

                </div>
                <div className="form-group">
                    <label>
                        Questions:
                        <input id="question" name="clientQuestion" type="text" onChange={this.handleChange}></input>
                    </label>
                </div>

                <button>submit</button>
            </form>


        );
    }
}
 
export default Form;