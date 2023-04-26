import React from "react";
import PropTypes from 'prop-types';
import { BtnOpt } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option =>{
                return (
                    <BtnOpt type="button" onClick={()=> onLeaveFeedback(option)} key={option}> 
                    {option} 
                    </BtnOpt>
                );
            })}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
};