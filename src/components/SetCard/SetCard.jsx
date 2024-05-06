import styles from './SetCard.module.css'
const SetCard = ({number, shape, color, shading}) => {

    const rotateCard = (element) => {
        console.log(element.target);
        // element.setAttribute('style', 'transform: rotateY(180deg);');
    }

    const numberOfShapes = () => {
        let shapes = [];
        for(let i = 0; i < number; ++i){
            const className = `${styles[color]} ${styles[shading]} ${styles[shape]}`;
            shapes.push(<div className={className} key={`${shape}_${number}_${color}_${shading}_${i}`}/>);
        }
        return shapes;
    }



    return(
        <div className={styles.card} onClick={rotateCard}>
            <div className={styles.front}>
                {numberOfShapes()}
            </div>
            <div className={styles.back}>
            </div>
        </div>
    );
}

export default SetCard;