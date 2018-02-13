import styled from 'styled-components';

export default styled.div`
    max-width: 1170px;
    margin: auto;
    
    @media (max-width: 1300px) {
        max-width: 900px;
    }

    @media (max-width: 1000px) {
        max-width: 700px;
    }

    @media (max-width: 768px) {
        max-width: 568px;
    }

    @media (max-width: 640px) {
        max-width: 90%;
    }
`;