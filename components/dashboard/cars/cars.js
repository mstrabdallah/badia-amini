import { useEffect } from "react";
import { Col, Row } from "antd";
import style from "./style/cars.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { getcars } from "../../../store/slices/cars/carsSlice";

const Cars = () => {
  const { cars, loading } = useSelector(({ cars }) => cars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcars());
  }, []);
  return (
    <div className={style.cars + " container_"}>
      <h2>المركبات المسجله</h2>
      <div>
        <Row gutter={[40, 20]}>
          {cars.map((car) => (
            <Col xs={24} lg={12} key={car.id}>
              <div className="carBox flex_">
                <div className="carInfo flex_">
                  <div className="carImg flex_">
                    <Image width={100} height={94} src="/icons/carIcon.svg" />
                  </div>
                  <div className="carData">
                    <h3>{car.brand}</h3>
                    <ul>
                      <li className="flex_">
                        <span>رقم الهوية / الإقامة :</span>
                        <span>2220589572</span>
                      </li>
                      <li className="flex_">
                        <span>الرقم التسلسلي :</span>
                        <span>{car.serial}</span>
                      </li>
                      <li className="flex_">
                        <span>الموديل :</span>
                        <span>{car.model}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="carButtons">
                  <li>

                    <Link href={`/dashboard/cars/${car.id}`}>
                      <div className="carButtonsLi">
                        <Image width={18} height={18} src="/icons/edit.svg" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <div className="carButtonsLi">
                      <Image width={18} height={18} src="/icons/hide.svg" />
                    </div>
                  </li>
                  <li>
                    <div className="carButtonsLi">
                      <Image width={18} height={18} src="/icons/trash.svg" />
                    </div>
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

export default Cars;
