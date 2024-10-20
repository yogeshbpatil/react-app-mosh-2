interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger" | undefined;
}
const Buttons = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Buttons;
