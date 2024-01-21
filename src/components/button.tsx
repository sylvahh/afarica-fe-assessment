
type ButtonProps = {
  title: string;
  action?: () => void;
  style: string;
  icon?: string;
};
const Button = ({ title, action, style, icon }: ButtonProps) => {
  return (
    <button
      title={title}
      onClick={action}
      className={`first-letter:capitalize font-semibold transition-all duration-300 hover:scale-105 ${style}`}>
      {title}
      {icon && <img src={icon} alt={title} />}
    </button>
  );
};

export default Button;
