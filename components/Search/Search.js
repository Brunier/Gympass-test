import React from 'react'
import styled from "styled-components";
import TextError from '../TextError/TextError';
import Loading from '../Loading/Loading';
import Button from '../Button/Button'

let Container = styled.div`
  margin-top:  ${props => props.marginTop ? props.marginTop + "px" : "1%"};
  text-align: center;
  color: #585656;
  
  input {
    padding: 10px 10px 10px 0;
    width: 15%;
    height: 27px;
    font-size: 23px;
    background-color: #fff;
    border: 2px solid #00757E;
    border-left: ${props => props.label ? "none" : "2px solid #00757E"};
    color: #585656;
  }
  
  label {
    background-color: white;    
    padding: 12px 7px 12px 12px;
    width: 110px;
    height: 23px;
    display: inline-block;
    font-size: 23px;
    border: 2px solid #00757E;
    border-right: ${props => props.label ? "none" : "2px solid #00757E"};
  }
`


class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: null
        }
    }

    onFormSubmit = (e) =>  {
        e.preventDefault();
        this.props.onClick(this.state.item);
    };

    onChange = (event) => {
        this.setState({item: event.target.value})
        if(event.target.value === "" && this.props.onClean) {
            this.props.onClean();
        }
    }

    render() {
        return(
            <Container label={this.props.label} marginTop={this.props.marginTop}>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        {this.props.label ? <label>{this.props.label}</label> : ""}
                        <input data-cy={"search-input"} autoFocus placeholder={this.props.placeholder} onChange={this.onChange}/>
                        {
                            !this.props.loading ?
                                <Button type="submit" text={this.props.btnText} disabled={this.props.disabled !== undefined ? this.props.disabled : !this.state.item} />
                                : <Loading width={30} left={"2%"} display={"inline"} img={this.props.imgLoading}/>

                        }
                    </div>
                    {this.props.error ? <TextError data-cy={"search-error"}>{this.props.error}</TextError> : ""}
                </form>
               </Container>

        )
    }
}


export default Search;

