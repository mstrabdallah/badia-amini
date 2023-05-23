import { useState } from "react";
import { Form, Rate, Input, Button } from "antd";
import style from "./style/rate.module.scss";
import { BsStar } from "react-icons/bs";
import ButtonsS1 from "@components/tools/buttons/buttonsS1";
const { TextArea } = Input;
const rateC = () => {
  const [value, setValue] = useState(3);
  return (
    <div className={style.rateP + " container_"}>
      <h2>شاركنا رأيك</h2>
      <p>شاركنا رأيك في أنظمة التأمين لدينا.</p>
      <Form className="rateForm" layout="vertical">
        <Rate
          onChange={setValue}
          character={<BsStar />}
          value={value}
          className="rateInput"
        />
        <Form.Item label="اكتب رأيك بالكامل">
          <TextArea />
        </Form.Item>
        <ButtonsS1 Width="153" text="أنشر رأيي" type="submit" />
      </Form>
    </div>
  );
};

export default rateC;
