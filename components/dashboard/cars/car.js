import { Button, Row, Col, Form, Input, Select, DatePicker } from "antd";
import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi";
import style from "./style/cars.module.scss";
import ButtonsS1 from "@components/tools/buttons/buttonsS1";
import Switch from "../tools/buttons/switch";
import { DownOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getcar } from "../../../store/slices/cars/carsSlice";
import { editCar } from "../../../store/slices/cars/editSlice";
import { editId } from "../../../store/slices/identities/editSlice";

const { Option } = Select;

const Car = () => {
  const [carForm] = Form.useForm();
  const [idForm] = Form.useForm();

  const { car, loading } = useSelector(({ cars }) => cars);
  const { carloading } = useSelector(({ editcar }) => editcar);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getcar({ id: router.query.id }))
      .unwrap()
      .then((res) => {
        carForm.setFieldsValue({
          ["serial"]: res.data?.serial,
          ["transmission_type"]: res.data?.transmission_type,
          ["purpose_vehicle_use"]: res.data?.purpose_vehicle_use,
          ["vehicle_night_parking"]: res.data?.vehicle_night_parking,
        });
        idForm.setFieldsValue({
          ["serial"]: res.data.identity?.serial,
          ["work_location"]: res.data.identity?.work_location,
          ["marital_status"]: res.data.identity?.marital_status,
          ["children_count"]: res.data.identity?.children_count,
          ["job"]: res.data.identity?.job,
          ["license_owning_years"]: res.data.identity?.license_owning_years,
          ["education"]: res.data.identity?.education,
          ["license_type"]: res.data.identity?.license_type,
        });
      });
  }, []);
  const [data, setData] = useState();
  const onChange = (value, date) => {
    setData(date);
  };
  const onFinishCar = (values) => {
    values.manufacture_year = data;
    dispatch(editCar({ id: router.query.id, data: values }));
  };

  const onFinishFailedCar = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinishId = (values) => {
    dispatch(editId({ id: car.identity.id, data: values }));
  };

  const onFinishFailedId = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={style.car + " container_"}>
      <div className="headP flex_">
        <span>
          <Link href="/dashboard/cars">
            <HiOutlineChevronRight />
          </Link>
        </span>
        <h1>تعديل بيانات المركبه</h1>
      </div>
      {loading ? (
        "llll"
      ) : (
        <Form
          form={carForm}
          layout="vertical"
          className="editCarInfoForm"
          onFinish={onFinishCar}
          onFinishFailed={onFinishFailedCar}
        >
          <div className="sCarHead flex_">
            <h2>تفاصيل عن المركبه</h2>
            <Button>حذف هذه المركبه</Button>
          </div>
          <div className="sCarContent">
            <Row gutter={20}>
              <Col xs={24} md={12}>
                <Form.Item label="نوع وثيقة المركبة">
                  <Input placeholder="البطاقه الجمركيه" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item name="serial" label="الرقم التسلسلي">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={10}>
              <Col xs={24} md={6}>
                <Form.Item name="transmission_type" label="نوع ناقل الحركة">
                  <Select>
                    <Option value="manual">يدويًا</Option>
                    <Option value="automatic">أوتوماتيكي</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item
                  name="purpose_vehicle_use"
                  label="الغرض من الإستخدام"
                >
                  <Select>
                    <Option value="private">خاص</Option>
                    <Option value="commercial">تجاري</Option>
                    <Option value="car_rental">تأجير سيارة</Option>
                    <Option value="uber_careem">أوبر كريم </Option>
                    <Option value="goods_transport">نقل البضائع</Option>
                    <Option value="petroleum_derivative_transport">
                      نقل المشتقات البترولية
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item label="سنة الصنع" name="manufacture_year">
                  <DatePicker
                    placeholder=""
                    onChange={onChange}
                    picker="year"
                    suffixIcon={<DownOutlined />}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item
                  name="vehicle_night_parking"
                  label="مكان إيقاف المركبة في الليل"
                >
                  <Select>
                    <Option value="street">الشارع</Option>
                    <Option value="home">المنزل</Option>
                    <Option value="garage">الجراج</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </div>
          <ButtonsS1 text="حفظ" type="submit" Width="98" loading={carloading} />
        </Form>
      )}
      <Form
        layout="vertical"
        className="editCarInfoForm"
        form={idForm}
        onFinish={onFinishId}
        onFinishFailed={onFinishFailedCar}
      >
        <div className="sCarHead flex_">
          <h2>تفاصيل عن مالك الوثيقه</h2>
        </div>
        <div className="sCarContent">
          <Row gutter={20}>
            <Col xs={24} md={12}>
              <Form.Item name="serial" label="رقم هوية حامل الوثيقة">
                <Input placeholder="2220589572" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item name="work_location" label="اسم و عنوان جهة العمل">
                <Input placeholder="مثال لعنوان جهة العمل" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col xs={24} md={4}>
              <Form.Item name="marital_status" label="الحاله  الاجتماعيه">
                <Select>
                  <Option value="single">اعزب</Option>
                  <Option value="married">متزوج</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={4}>
              <Form.Item
                name="children_count"
                label="عدد الأطفال دون عمر ال 16"
              >
                <Select>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={4}>
              <Form.Item name="job" label="المهنة">
                <Select>
                  <Option value="accountant">محاسب</Option>
                  <Option value="doctor">طبيب</Option>
                  <Option value="teacher">معلم</Option>
                  <Option value="engineer">مهندس</Option>
                  <Option value="driver">سائق</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={4}>
              <Form.Item name="education" label="التعليم">
                <Select>
                  <Option value="high">عالي</Option>
                  <Option value="above_medium">فوق متوسط</Option>
                  <Option value="medium">متوسط</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={4}>
              <Form.Item name="license_type" label="نوع رخصة القيادة">
                <Select>
                  <Option value="public">عام</Option>
                  <Option value="private">خاص</Option>
                  <Option value="motorcycle">دراجة نارية</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} md={4}>
              <Form.Item
                name="license_owning_years"
                label="عدد سنوات امتلاك الرخصة"
              >
                <Select>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
                  <Option value="9">9</Option>
                  <Option value="10">10</Option>
                  <Option value="11">11</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={20}>
            <Col xs={24}>
              <Switch label="لدى مالك الوثيقة ظروف صحية أو قيود على الرخصة" />
            </Col>
            <Col xs={24}>
              <Switch label="لدى مالك الوثيقة مخالفات مرورية" />
            </Col>
            <Col xs={24}>
              <Switch label=" لدى مالك الوثيقة رخصة قيادة صالحة من دول أخرى" />
            </Col>
          </Row>
        </div>
        <ButtonsS1 text="حفظ" type="submit" Width="98" />
      </Form>
    </div>
  );
};

export default Car;
