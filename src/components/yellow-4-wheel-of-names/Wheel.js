import Slice from "./Slice";
import styles from "./Wheel.module.css";

const Wheel = (props) => {
  const degree = 360 / props.listOfNames.length;

  const colorList = ["#FFDCAE", "#CED89E", "#D8CCA3"];
  let count = 0;

  return (
    <>
      <div className={styles.container} ref={props.theRef}>
        {props.listOfNames.map((item, index) => {
          const deg = Math.round(degree * index);
          if(count % 3 === 0) {
            count = 0;
          }

          // return <Slice color={index % 2 === 0 ? colorList[0] : colorList[1]} deg={deg} name={item} />;
          return <Slice color={colorList[count++]} deg={deg} name={item} />;
        })}
      </div>
      <span className={styles.mid}></span>
      <div className={styles.stopper}></div>
    </>
  );
};

export default Wheel;
