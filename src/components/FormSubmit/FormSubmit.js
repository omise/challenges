import styled from 'styled-components';
import { palette } from 'config/variables';

export const FieldSet = styled.fieldset`
    border: none;
    padding: 0;
    margin: 0;

    input.input-checkbox {
        position: absolute!important;
        width: 24px;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 9;
        opacity: 0;

        &:checked + label:before {
            background: ${palette.blue};
        }

        &:checked + label:after {
            opacity: 1;
        }
    }

    button.btn-submit {
        color: ${palette.white};
        background: ${palette.blueDark};
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    width: auto;
    padding: 9px;
    margin: 9px 0;
    border-top: 1px solid ${palette.grayLight}
`;

export const Label = styled.label`
    width: auto;
    padding: 0 0 0 24px;
    position: relative;
    font-size: 12px;
    margin: 0;
    text-transform: uppercase;
    color: ${palette.gray};
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        top: -2px;
        left: 0;
        display: block;
        margin: 0 5px 0 0;
        width: 14px;
        height: 14px;
        border: 2px solid ${palette.blue};
        z-index: 0;
        transition: background 0.2s ease-in-out;
    }

    &:after {
        content: '';
        position: absolute;
        width: 10px;
        top: 2px;
        left: 2px;
        height: 5px;
        border-left: 3px solid ${palette.white};
        border-bottom: 3px solid ${palette.white};
        transform: rotate(-45deg);
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }
`;