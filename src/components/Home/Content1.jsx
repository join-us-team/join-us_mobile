import React from "react";
import imgSrc from "../../assets/images/content1-img.png"

const Content1 = () => {
  return (
    <div>
      <h3>Woori Vision</h3>
      <img src={imgSrc} />
      <p>말씀을 통해 <span>목장</span>에서 같이 <span>공감</span>하고 아우릅니다.</p>
      <p><span>함께</span> 웃고, <span>함께</span> 울어주는 공동체 <span>우리들 목장</span>에 참여해보세요!</p>
    </div>
  );
}

export default Content1;