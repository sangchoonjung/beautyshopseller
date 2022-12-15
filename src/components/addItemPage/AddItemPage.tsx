import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { steps } from './StepComponent/StepsDescription';
import { StepOne } from './StepComponent/StepOne';
import { SxProps } from '@mui/material';
import { AddItemContext } from '../../context/addItemContext';
import { StepTwo } from './StepComponent/StepTwo';
import { StepThree } from './StepComponent/StepThree';
import { StepEndConfirm } from './StepComponent/StepEndConfirm';

const StepBoxStyle: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    width: '70vw',
    minWidth: '500px'
}
export interface ItemState {
    name: string, category: string, amount: number, price: number,
    country: string, description: string, status: string,
    available: "Available" | "Unavailable"
}


export default function AddItemPage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const ref = React.useRef<HTMLInputElement>(null!);
    const { input, handleInputChange, fileSelectHandle } = React.useContext(AddItemContext);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    const clickHandle = () => {
        ref.current.click()
    }

    return (
        <Box sx={{ m: 2, p: 2, display: 'flex', flexDirection: "column", alignItems: "center", }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label} sx={StepBoxStyle} >
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                        >
                            <Typography sx={{ mx: 2 }}>{step.label}</Typography>
                        </StepLabel>
                        <StepContent>
                            <Box sx={{ mb: 2, }}>
                                <div>
                                    {
                                        index === 0 && (
                                            <>
                                                <StepOne input={input!} handleChange={handleInputChange!} />
                                            </>
                                        )
                                    }
                                    {
                                        index === 1 && (
                                            <>
                                                <StepTwo clickHandle={clickHandle} />
                                            </>
                                        )
                                    }
                                    {
                                        index === 2 && (
                                            <>
                                                <StepThree input={input!} handleChange={handleInputChange!} />
                                            </>
                                        )
                                    }
                                    <Box sx={{ p: 2 }}>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? '완료' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </Box>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Box sx={StepBoxStyle}>
                    <StepEndConfirm handleReset={handleReset} />
                </Box>

            )}
            <input onChange={fileSelectHandle!()} multiple type={"file"} ref={ref} style={{ display: "none" }} accept="image/*" />
        </Box>

    );
}