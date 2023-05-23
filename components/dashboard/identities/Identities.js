import { Col, Row } from "antd";
import { useEffect } from "react";
import Image from "next/image";
import style from "./style/ids.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getids } from "../../../store/slices/identities/identitiesSlice";

const index = (props) => {
  const { identities, loading } = useSelector(({ identities }) => identities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getids());
  }, []);
  return (
    <div className={style.ids + " container_"}>
      <h2>الهويات المسجلة</h2>
      <div>
        <Row gutter={[20, 20]}>
          {identities.map((id) => (
            <Col xs={24} lg={12} key={id}>
              <div className="idCard flex__">
                <div className="idContent flex_">
                  <div className="idImg">
                    <Image width={24} height={24} src="/icons/userIcon.svg" />
                  </div>
                  <div className="idInfo">
                    <h2>{id.name}</h2>
                    <p>{id.serial}</p>
                  </div>
                </div>
                <ul className="idButtons">
                  <li>
                    <Image width={18} height={18} src="/icons/edit.svg" />
                  </li>
                  <li>
                    <Image width={18} height={18} src="/icons/trash.svg" />
                  </li>
                  <li>
                    <Image width={18} height={18} src="/icons/hide.svg" />
                  </li>
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default index;
