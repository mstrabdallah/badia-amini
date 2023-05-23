import { Row, Col, Form, Input } from "antd";
import ButtonsS1 from "@components/tools/buttons/buttonsS1";
import Switch from "../tools/buttons/switch";
import style from "./style/settings.module.scss";
const index = () => {
  const onFinish = (values) => {
    values.image_ids = [...imagesIds];
    values.discount_percentage = 0;
    values.search_appearance = "yes";
    dispatch(addproduct(values))
      .unwrap()
      .then((res) => {
        message.success("تم اضافة المنتج");
        router.push("/products");
      })
      .catch((error) => {
        message.error("اوبس!, هناك بعض الاخطاء");
      });
  };

  const onFinishFailed = (errorInfo) => {
    message.error(
      "يرجي مراجعة البيانات المدخلة, والتأكد من ادخال جميع البيانات"
    );
  };

  const changed = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className={style.settings + " container_"}>
      <h2>الاعدادات</h2>
      <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="settingsForm"
      >
        <div className="settingsBox">
          <h3>الإعدادات الشخصيه</h3>
          <div className="settingsInputs">
            <Row gutter={20}>
              <Col xs={24} md={8}>
                <Form.Item label="الاسم">
                  <Input placeholder="احمد عادل ابراهيم عبدالوهاب" />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item label="البريد الالكتروني">
                  <Input placeholder="example@gmail.com" />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item label="رقم الهاتف">
                  <Input placeholder="5251626526516" />
                </Form.Item>
              </Col>
            </Row>
          </div>
        </div>
        <div className="settingsBox">
          <h3>الاشعارات</h3>
          <div className="settingsInputs">
            <Row gutter={20}>
              <Col xs={24}>
                <Switch
                  label="ارسال اشعار قبل انتهاء الوثيقه"
                  changed={changed}
                />
              </Col>
              <Col xs={24}>
                <Switch
                  label="ارسال اشعار بعد انتهاء الوثيقه"
                  changed={changed}
                />
              </Col>
            </Row>
          </div>
        </div>
        <div className="settingsBox">
          <h3>تغير كلمة المرور</h3>
          <div className="settingsInputs">
            <Row gutter={20}>
              <Col xs={24} md={8}>
                <Form.Item label="كلمة المرور الحاليه">
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item label="كلمة المرور الجديده">
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item label="تاكيد كلمة المرور">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </div>
        </div>

        <ButtonsS1 Width="76" text="حفظ" type="submit" />
      </Form>
    </div>
  );
};

export default index;
