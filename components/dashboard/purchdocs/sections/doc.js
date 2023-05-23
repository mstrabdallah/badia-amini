import Image from "next/image";
import style from "../style/purchdocs.module.scss";
const Doc = ({
  expired,
  name,
  serial,
  model,
  cost,
  carSerial,
  brand,
  endAt,
}) => {
  return (
    <div className={style.doc + " flex_"}>
      <div className={["docType", "flex_", expired && "expired"].join(" ")}>
        <h2>تأمين شامل</h2>
      </div>
      <div className="docInfo">
        <div className="docImg flex_">
          <Image width={78} height={72} src="/photos/doc.svg" />
        </div>
        <div className="docContent">
          <h2>تأمين المركبات الشامل الراجحي تكافل</h2>
          <div className="docPerson">
            <ul>
              <li>
                <span>اسم مالك الهويه :</span>
                <span>{name}</span>
              </li>
              <li>
                <span>رقم الهوية / الإقامة :</span>
                <span>{serial}</span>
              </li>
            </ul>
          </div>
          <div className="docCar flex_">
            <ul>
              <li>
                <span>نوع السياره :</span>
                <span className="brand">{brand}</span>
              </li>
              <li>
                <span>رقم اللوحة :</span>
                <span>ا س ا 2641</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>الرقم التسلسلي :</span>
                <span>{carSerial}</span>
              </li>
              <li>
                <span>الموديل :</span>
                <span>{model}</span>
              </li>
            </ul>
          </div>
          <div className="docDates flex_">
            <ul>
              <li>
                <span>تاريخ بدء الوثيقة :</span>
                <span>28/07/2022</span>
              </li>
              <li>
                <span>تاريخ اصدار الوثيقة :</span>
                <span>25/07/2022</span>
              </li>
              <li>
                <span>الرقم المرجعي للتسعيرة :</span>
                <span>TPJU25072215521017</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>نوع التأمين :</span>
                <span>شامل</span>
              </li>
              <li>
                <span>تاريخ انتهاء الوثيقة :</span>
                <span>{endAt}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="docPrice flex_">
        <span className="priceTitle">السعر :</span>
        <div>
          <span>{cost}</span>
          <span>ر . س</span>
        </div>
      </div>
    </div>
  );
};

export default Doc;
