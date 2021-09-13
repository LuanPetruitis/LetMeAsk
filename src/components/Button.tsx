import {ButtonHTMLAttributes} from 'react'

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

// repassando as propriedades
export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}