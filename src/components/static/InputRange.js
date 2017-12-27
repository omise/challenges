import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`

`;

const Input = styled.input`
    display: block;
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;
`

const Label = styled.label`
`;

export default class InputRange extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: this.props.step,
        }
    }

    static propTypes = {
        dataId: PropTypes.string,
        type: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        list: PropTypes.string,
        onChange: PropTypes.func,
        options: PropTypes.arrayOf(PropTypes.number),
    }

    componentWillReceiveProps() {

    }

    

    render() {
        const options = this.props.options;
        return (
            <Wrapper className={this.props.className}>
                <Input
                    type={'range'}
                    min={this.props.min}
                    max={this.props.max}
                    list={this.props.dataId}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
                <datalist
                    id={this.props.dataId}
                >
                    {options.map((option, i) => (
                        <option
                            key={i} 
                            value={option}
                            label={option}
                        />
                    ))};
                </datalist>
            </Wrapper>
        )
    }
}
