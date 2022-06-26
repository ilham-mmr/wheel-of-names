import "./TextList.css";

const TextList = (props) => {
  // let background =  ;
  return (
    <div className='text-container'>
      <textarea
        ref={props.theRef}
        onChange={props.onChangeText}
        id="txtid"
        rows="4"
        cols="25"
        maxlength="200"
        disabled={props.isSpinning ? true : false}
      >
            {props.text}
      </textarea>
    </div>
  );
};

export default TextList;
