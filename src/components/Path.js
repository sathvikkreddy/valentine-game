import boyRight from "../boy-right.jpg";
import girl from "../girl.jpg";
import together from "../together.jpg";

export default function Path(props) {
  const position = props.position;
  return (
    <div>
      <div className="d-flex justify-content-evenly mb-4 py-2 border">
        <div>{position === 0 && <img src={boyRight} alt="boy" />}</div>
        <div>{position === 1 && <img src={boyRight} alt="boy" />} </div>
        <div>{position === 2 && <img src={boyRight} alt="boy" />} </div>
        <div>{position === 3 && <img src={boyRight} alt="boy" />} </div>
        <div>{position === 4 && <img src={boyRight} alt="boy" />} </div>
        <div>{position === 5 && <img src={boyRight} alt="boy" />} </div>
        <div>
          {position !== -1 ? (
            <img src={girl} alt="girl" />
          ) : (
            <img src={together} alt="together" />
          )}
        </div>
      </div>
    </div>
  );
}
