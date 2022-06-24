import Slice from "./Slice";
import styles from "./Wheel.module.css";

const Wheel = (props) => {
  const degree = 360 / props.listOfNames.length;

  const colorList = ["#FFDCAE", "#CED89E"]

  return (
    <>
      <div className={styles.container} ref={props.theRef}>
        {props.listOfNames.map((item, index) => {
          const deg = Math.round(degree * index);
          
          return <Slice color={index % 2 === 0 ? colorList[0] : colorList[1]} deg={deg} name={item} />;
        })}
      </div>
      <span className={styles.mid}></span>
      <div className={styles.stopper}></div>
    </>
  );
};

export default Wheel;
