import { ChangeEvent, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { Colors } from "../../../../theme/theme";

interface Props {
  pos: number;
  image: any;
  deleteImage: (pos: number) => void;
  handleChangeLabel: (pos: number, value: string) => void;
  hasLabel?: boolean;
}

const Image = ({
  pos,
  image,
  deleteImage,
  hasLabel,
  handleChangeLabel,
}: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  const [labelValue, setLabelValue] = useState<string>("");
  const handleLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabelValue(e.target.value);
    handleChangeLabel(pos, e.target.value);
  };
  return (
    <div
      key={pos}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: hover ? "lightGrey" : "transparent",
        width: "90%",
        height: "80px",
        border: `solid 3px ${Colors.black[40050]}`,
        borderRadius: "10px",
        padding: "10px",
        cursor: "grabbing",
      }}
    >
      <img
        alt=""
        draggable="false"
        style={{
          cursor: "pointer",
          height: "100%",
          borderRadius: "6px",
          objectFit: "cover",
        }}
        key={pos}
        src={URL.createObjectURL(image)}
      />
      <div style={{ display: "flex", columnGap: "5px" }}>
        {hasLabel && (
          <input type="text" value={labelValue} onChange={handleLabelChange} />
        )}
        <RiDeleteBinLine
          onClick={() => deleteImage(pos)}
          style={{ cursor: "pointer" }}
          size="1.5rem"
          color={Colors.black[400]}
        />
      </div>
    </div>
  );
};

export default Image;
