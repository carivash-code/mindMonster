import ReactCurvedText from "react-curved-text";
import { numbersType } from "../../Types/NumbersType";
import './ColNumberAndCircle.scss';
interface Props {
  className?: string;
  numbersData: numbersType[];
  circleText1: string;
  circleText2: string;
  circleText3: string;
  circleText4: string;
}
export const ColNumberAndCircle = ({
  className,
  numbersData,
  circleText1,
  circleText2,
  circleText3,
  circleText4,
}: Props) => {
  const genNumber = (num: number) => {
    return { "--percent": num} as React.CSSProperties;
  };
  return (
    <div
      className={`col__number__and__circle row m-0 p-0 ${
        className ? className : ""
      }`}
    >
      <div className="col-12 title">
        <h3>CONTACTO</h3>
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-8 col-12 col-numbers">
        {numbersData.map((item) => (
          <div className="number">
            <h3 style={genNumber(item.number)}  className="counter-number"></h3>
            <span>{item.textNumber}</span>
          </div>
        ))}
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-4 col-12 col-circle">
        <div className="circle-container">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-expect-error */}
          <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={150}
            rx={100}
            ry={100}
            startOffset={0}
            reversed={false}
            text={`${circleText1} - ${circleText2} - ${circleText3} - ${circleText4}`}
            textProps={{ style: { fontSize: 20 } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{ fill: "#fff" }}
          />
        </div>
        {/* <div className="circle-container">
          <div className="word">{circleText1}</div>
          <div className="word">{circleText2}</div>
          <div className="word">{circleText3}</div>
          <div className="word">{circleText4}</div>
        </div> */}
      </div>
    </div>
  );
};
