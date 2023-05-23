import style from "./style/purchdocs.module.scss";
import Doc from "./sections/doc";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdocs } from "../../../store/slices/purchdocs/purchdocsSlice";
import NoDataFoundS1 from '../../tools/noDataFound/noDataFoundS1'
const Purchdocs = () => {
  const { docs, loading } = useSelector(({ docs }) => docs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdocs());
  }, []);

  return (
    <div className={style.purchDocs + " container_"}>
      <h2>وثائق تم شراؤها</h2>
      <div className="docsBox">
        <h3>وثائق سارية المفعول</h3>
        <div className="docs">
          
          {docs.length ? (
            docs.map((doc) => (
              <Doc
                name={doc.identity.name}
                serial={doc.identity.serial}
                key={doc.id}
                model={doc.car.model}
                cost={doc.total_price}
                carSerial={doc.car.serial}
                brand={doc.car.brand}
                endAt={doc.end_at}
              />
            ))
          ) : (
            <NoDataFoundS1 text={'لا توجد سجلات'} />

          )}
        </div>
      </div>
      <div className="docsBox">
        <h3>وثائق منتهية الصلاحيه</h3>
        <div className="docs">
          {
            []?.length ?
              <Doc expired />
              :
              <div className="docsNoData">
                <NoDataFoundS1 text={'لا توجد سجلات'} />
              </div>
          }
        </div>
      </div>
      <div className="docsBox">
        <h3>وثائق قاربت علي الانتهاء</h3>
        <div className="docs">
          <div className="docsNoData">
            <NoDataFoundS1 text={'لا توجد سجلات'} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Purchdocs;
