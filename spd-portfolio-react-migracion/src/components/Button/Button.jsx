import style from "./Button.module.css";

export const Button = ({ name, className }) => {
    return (
        <button className={`${style.btn} ${className}`} ><a href="">{name}</a></button>
    )
}