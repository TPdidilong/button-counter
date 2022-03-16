import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function App() {
    const [isAble, setIsAble] = useState(true);
    const [count, setCount] = useState(0);

    const handleCount = () => {
        if (!isAble) return;
        setCount(count + 1);
    };

    const handleClear = () => {
        setCount(0);
    };

    const handleEnable = () => {
        setIsAble(!isAble);
    };

    return (
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
        >
            <Button key="one" onClick={handleCount}>
                CLICK:{count}
            </Button>
            <Button key="two" onClick={handleClear}>
                CLEAR
            </Button>
            <Button
                key="three"
                onClick={handleEnable}
                variant={isAble ? 'outlined' : 'contained'}
            >
                {isAble ? 'DISABLE' : 'ABLE'}
            </Button>
        </ButtonGroup>
    );
}
