import { Switch } from "antd";
import style from "./buttons.module.scss";

const SwitchBtn = ({ label, changed }) => {
  return (
    <div className={style.switchBtn + " flex_"}>
      <Switch onChange={changed} />
      <p>{label}</p>
    </div>
  );
};

export default SwitchBtn;
