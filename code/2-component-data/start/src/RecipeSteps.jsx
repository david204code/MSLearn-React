import React from 'react';

function RecipeSteps(props) {
    return (
        <div>
            <p>{props.steps.step1}</p>
            <p>{props.steps.step2}</p>
            <p>{props.steps.step3}</p>
            <p>{props.steps.step4}</p>
            <p>{props.steps.step5}</p>
            <p>{props.steps.step6}</p>
            <p>{props.steps.step7}</p>
            <p>{props.steps.step8}</p>
        </div>
    )
};

export default RecipeSteps;