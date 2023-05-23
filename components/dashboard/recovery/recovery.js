import { Form, Row, Col, Select, InputNumber } from "antd";
import style from "./style/recovery.module.scss";
import ButtonsS1 from '../../tools/buttons/buttonsS1'
const Recovery = () => {
  const onFinish = (values) => {
    // console.log('Success:', values);
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
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={style.recoverDocs + " container_"}>
      <h2>خدمة استرجاع وثيقة التأمين</h2>
      <p>
        هذه الخدمة تمكنك من نسخ وثيقة تأمين مشتراه مسبقاً من حساب آخر والاحتفاظ
        بها في هذا الحساب
      </p>
      <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="recoverForm"
      >
        <div className="formInputs">
          <div>
            <Row gutter={20}>
              <Col xs={24} lg={12} xl={8}>
                <Form.Item
                  name="category_id"
                  rules={[{ message: "هذا الحقل مطلوب." }]}
                  label="رقم هوية مالك الوثيقة"
                >
                  <Select optionFilterProp="children" onChange={onChange}>
                    {[1, 1, 1].map((res) => (
                      <Option key={res.id} value={res.id}>
                        {res.title}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} lg={12} xl={8}>
                <Form.Item
                  name="sell_price"
                  rules={[
                    {
                      type: "number",
                      message: "هذا الحقل مطلوب.",
                    },
                  ]}
                  label="نوع وثيقة المركبة"
                >
                  <InputNumber placeholder="الرقم التسلسلي" />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12} xl={8}>
                <Form.Item
                  name="sell_price"
                  rules={[
                    {
                      type: "number",
                      message: "هذا الحقل مطلوب.",
                    },
                  ]}
                  label="ادخل الرقم التسلسلي"
                >
                  <InputNumber placeholder="556225256" />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12} xl={12}>
                <h4>رقم هوية مالك الوثيقة</h4>
                <div className="selectors flex_">
                  <Form.Item
                    name="category_id"
                    rules={[{ message: "هذا الحقل مطلوب." }]}
                  >
                    <Select onChange={onChange}>
                      {[1, 2, 3].map((res) => (
                        <Option key={res.id} value={res.id}>
                          {res.title}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="category_id"
                    rules={[{ message: "هذا الحقل مطلوب." }]}
                  >
                    <Select optionFilterProp="children">
                      {[1, 2, 3].map((res) => (
                        <Option key={res.id} value={res.id}>
                          {res.title}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="category_id"
                    rules={[{ message: "هذا الحقل مطلوب." }]}
                  >
                    <Select
                      className="spSelect"
                      optionFilterProp="children"
                      onChange={onChange}
                    >
                      {[1, 2, 3].map((res) => (
                        <Option key={res.id} value={res.id}>
                          {res.title}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="agreeBtn">
          <input type="checkbox" />
          <p>
            أقر وأتعهد بأن الوثيقة المراد نسخها لهذا الحساب تخصني، كما أتعهد
            بتحمل كافة الإجراءات القانونية في حال مخالفة ذلك
          </p>
        </div>

        <ButtonsS1 Width="168" text="استرجع وثيقة التامين" type="submit" />
      </Form>
    </div>
  );
};

export default Recovery;
