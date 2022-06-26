const Slice = (props) => {
 
  // let background =  ;
  return (
    <div
      style={{
        background: props.color,
        left: props.isFirst != null ? "50%" : "",
        transform: `rotate(${props.deg}deg)`,
      }}
    >
      <p>{props.name}</p>
    </div>
  );
};

export default Slice;
