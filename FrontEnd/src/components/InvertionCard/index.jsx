import styles from "./styles.module.css";

export const InvertionCard = ({title, text, sourceImg}) => {
    return (
        <div className={styles.container}>
        <div className={styles.img}>
            <img src={sourceImg}  className={styles.image} />
        </div>
        <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
        </div>
    </div>
    )
}