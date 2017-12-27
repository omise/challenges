import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Charity from 'components/Charity';
import Spinner from 'static/Spinner';
import Container from 'static/Container';

const Form = styled.form`
    position: relative;
`;

const CharityWrapper = styled.article`
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 35vw;
    position: relative;
    margin: 0 18px 18px 0;
    background: white;
`;

class Charities extends Component {
    
    render() {
        const { charities } = this.props;
        if (charities.isLoading) return <Spinner />
        return (
            
            <Form
                className={'donation-form'}
            >
                <Container className={'container'}>
                    {charities.items.map((item, i) => (
                        <Charity
                            key={i}
                            optid={`opt-charity-0${item.id}`}
                            name={'charity'}
                            className={'charity-item'}
                            caption={item.name}
                            image={item.image}
                            value={item.id}
                            label={item.name}
                            charityId={item.id}
                        />
                    ))}
                </Container>
            </Form>
        )
    }
}

const MapStateToProps = (state) => {
    return state;
}

export default connect(MapStateToProps, null)(Charities);