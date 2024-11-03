import styles from "./styles.module.css";

export const Card = ({title, text, sourceImg, buttonText}) => {
    return (
        <div className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
            {buttonText && <button className={styles.button}>{buttonText}</button>}
        </div>
        <div className={styles.img}>
            <img src={sourceImg}  className={styles.image} />
        </div>
    </div>
    )
}