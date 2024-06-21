import styles from './question.module.css'

type QuestionProps = {
    questionNumber: number
    title: string,
    text: string
}

export const Question = ({ questionNumber ,title, text }: QuestionProps) => {
    return (
        <div className={styles.wrap}>
            <h4 className={styles.questionTitle}>{questionNumber} ) {title}</h4>
            <h3 className={styles.question}>{text}</h3>
        </div>
    )
}