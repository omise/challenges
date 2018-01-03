import styled from 'styled-components';
import { palette, text } from 'config/variables';

export const FieldSet = styled.fieldset`
    position: relative;
    margin: 0;
    padding: 36px 0 72px;
    border: none;
`;

export const OptionItem = styled.article`
    position: relative;
    width: 49%;
    display: inline-block;
    &:nth-child(odd) {
        margin: 0 1% 2% 0;
    }
    &:nth-child(even) {
        margin: 0 0 2% 1%;
    }
    background: white;

    @media (max-width: 568px) {
        width: 90%;
        display: block;
        margin: 20px auto!important;
    }

    .option-charity {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        opacity: 0;
        cursor: pointer;

        &:hover + label:after,
        &:checked + label:after {
            background: ${palette.blue};
            color: ${palette.white};
        }
    }
    
`;

export const InputWrapper = styled.div`
    display: table;
    width: 100%;
    margin: 0;
    position: relative;
    z-index: 9;
`;

export const ImageLabel = styled.label`
    display: block;
    padding: 0;
    width: 100%;
    height: 100%;
    position: relative;
    margin-bottom: 0;
    cursor: pointer;
    color: ${palette.gray};

    &:before {
        display: none;
    }

    &:after {
        content: '${text.ctaDonate}';
        line-height: 0.75;
        border: 2px solid ${palette.blueDark};
        border-radius: 3px;
        padding: 8px 12px;
        text-align: center;
        color: ${palette.blueDark};
        transition: background 0.1s ease-in-out;
        font-size: 16px;
    }    
`;

export const LabelText = styled.span`
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 100px);
    padding: 27px;

    @media (max-width: 1012px) {
        min-height: 96px;
    }

    @media (max-width: 768px) {
        min-height: 118px;
        font-size: 15px;
    }

    @media (max-width: 568px) {
        min-height: 96px;
        font-size: 16px;
    }
`;

