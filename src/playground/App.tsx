import '../../lib/style.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Button, Input} from '../index';

export default (props: any) => {

    const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.target);
    };

    const onChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e.keyCode);
    };

    return (
        <div>
            <fieldset style={{display: 'inline-block'}}>
                <legend>Button Element</legend>
                <Button onClick={onClick}>Button</Button>
                <Button onClick={onClick} disabled>Button</Button>
                <Button onClick={onClick} inverseStyle>Button</Button>
                <Button onClick={onClick} inverseStyle disabled>Button</Button>
            </fieldset>
            <fieldset style={{display: 'inline-block'}}>
                <legend>Input Element</legend>
                <Input onChange={onChange} type="text" maxlength="5" placeholder="max length 5"/>
                <Input onChange={onChange} disabled value="disabled"/>
                <Input onChange={onChange} placeholder="With placeholder"></Input>
                <Input onChange={onChange} size="79" value="with changed size attribute"></Input>
            </fieldset>
        </div>
    );
};
