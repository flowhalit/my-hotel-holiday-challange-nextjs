/* eslint-disable @next/next/no-img-element */
import React, {  useEffect, useRef, useState } from "react";
const useOnScreen = (refItem) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    if (refItem.current) {
      observer.observe(refItem.current);
    }
  }, []);
  return isIntersecting;
};
const HotelListItemComponent = ({item,index}) => {
    const childRef= useRef();
    const childRefValue = useOnScreen(childRef);

  return (
    <article key={index}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2>
            <a
              href={item.url}
              title={item.hotelName}
              target="_blank"
              data-decid={item.hotelName}
              rel="noreferrer"
            >
              {item.hotelName}
            </a>
          </h2>
          <a href={item.url} target="_blank" rel="noreferrer">
            <div className={item.customersPointCssName + "  position-relative"}>
              <div className="score__left">
                <div className="title">item.customersPointText</div>
                <div className="desc">{item.reviewCount} Değerlendirme</div>
              </div>
              <div className="score__right">{item.customerScore} </div>
            </div>
          </a>
        </div>
        <div className="panel-body">
          <div className="">
            <div className="col-lg-4 col-md-3 col-sm-4 col-xs-12 img-mask">
              <a href={item.url} target="_blank" rel="noreferrer">
                <img
                  ref={childRef}
                  width="257"
                  height="171"
                  title={item.hotelName}
                  alt={item.hotelName}
                  className="img-responsive lazy-loaded-image"
                  src={childRefValue?item.photoPath:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="}
                />
              </a>
              <div className="badge-list badge-list--top-right badge-list--bottom-right-mobile">
                {" "}
              </div>
              <div
                className="badge-list badge-list--bottom-left"
                data-magic="False"
              >
                <div
                  className="badge-list__item badge-list__item--payathotel"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="%25 Ön Ödeme Yaparak Rezervasyonunuzu Tamamlayabilirsiniz"
                >
                  <span>Ön Ödeme Fırsatı</span>
                </div>
                <div
                  className="badge-list__item badge-list__item--covid"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Sağlıklı Turizm Sertifikalı"
                >
                  <span>Sağlık Sertifikalı</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-5 col-xs-6 otel-item-content">
              <p>
                {" "}
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {item.areaName} - {item.subAreaName}{" "}
                {item.subAreaDetailName ? "| " + item.subAreaDetailName : ""}
              </p>
              <p className="erk-promo">{item.campaignName}</p>
              <div
                className="free-cancellation-info"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Girişte Öde ile rezervasyon yaparak giriş gününe 72 saat kalaya kadar ücretsiz koşulsuz iptal fırsatından yararlanabilirsiniz."
              >
                <img
                  src="./images/room-card-info-icon.svg"
                  width="14"
                  height="14"
                  alt="Ücretsiz İptal"
                />
                Ücretsiz İptal
              </div>
              <div className="hotelFeatures">
                <ul className="hotelFeaturesList">
                  {item.hotelPropertyList.map((hotel_property, indexKey) => (
                    <li
                      className={
                        "hotelFeaturesList__hotelFeaturesTooltip " +
                        hotel_property.code
                      }
                      key={indexKey}
                    >
                      <i className="hotelFeaturesTooltip-icon"></i>
                      {hotel_property.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 otel-list__price-box">
              <div className="otel-list__price-box__content">
                <p className="hostel-type">{item.accommodation}</p>
                <p className="currency">
                  {item.price}
                  <small className="price-currency">{item.currency}</small>
                </p>
                <p className="discount-price">
                  {parseFloat(
                    item.discountPrice.toString().match(/^\d+(?:\.\d{0,2})?/)
                  )}
                  <small className="price-currency">{item.currency}</small>
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  className="btn btn-block btn-primary"
                  rel="noreferrer"
                >
                  Detayları İncele
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default HotelListItemComponent;
