interface Props {
  image: string;
  className?: string;
}
export const ImageContainRight = ({ image, className }: Props) => {
  return (
    <div className={`image__contain__right ${className ? className : ""}`}>
      <img src={image} alt="image monster" />
    </div>
  );
};
