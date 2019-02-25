import React from 'react'
import styled from "styled-components";
import TextError from '../TextError/TextError';
import Loading from '../Loading/Loading';
import Button from '../Button/Button'

let Container = styled.div`
  margin-top: 1%;
  text-align: center;
  color: #585656;
  
  input {
    padding: 10px 10px 10px 0;
    width: 15%;
    height: 27px;
    border: none;
    font-size: 23px;
    background-color: #fff;
    border: 2px solid #00757E;
    border-left: none;
    color: #585656;
  }
  
  label {
    background-color: white;    
    padding: 12px 7px 12px 12px;
    width: 110px;
    height: 23px;
    display: inline-block;
    border: none;
    font-size: 23px;
    border: 2px solid #00757E;
    border-right: none;
  }
`


class UserSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: null
        }
    }

    onFormSubmit = (e) =>  {
        e.preventDefault();
        this.props.setUser(this.state.userName);
    }

    render() {
        return(
            <Container>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label>Github.com/</label>
                        <input autoFocus placeholder={"Gympass"} onChange={event => this.setState({userName: event.target.value})}/>
                        {
                            !this.props.loading ?
                                <Button type="submit" text={"Procurar Repositórios"} disabled={!this.state.userName} />
                                : <Loading width={30} left={"2%"} display={"inline"} img={this.props.imgLoading}/>

                        }
                    </div>
                    {this.props.error ? <TextError>{this.props.error}</TextError> : ""}
                </form>
               </Container>

        )
    }
}


export default UserSearch;

