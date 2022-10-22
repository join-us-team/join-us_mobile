import React from "react";
import imgSrc from "../../assets/images/content2-img.png"

const Content2 = () => {
  return (
    <div>
      <h3>Join Us?</h3>
      <img src={imgSrc} style={{width:'60%'}} />
      <p>모르는 사람에게 혹은 조인하자는 말 자체가 <span>어색한</span> 우리</p>
      <p>그런 이유로 조인을 힘들어하는 우리 목자들을 위한 <span>사이트</span></p>
      <p>이제는 <span>간편</span>하게 보내보는 조인 신청! <span>Join us?</span></p>
    </div>
  );
}

export default Content2;