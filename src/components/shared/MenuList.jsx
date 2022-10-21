import React, { HTMLAttributes } from 'react';

const Menus = [
  {
    id: 1,
    name: "조인 매칭",
    src: "/join-matching",
  },
  {
    id: 2,
    name: "매칭 현황",
    src: "/matching-status",
  },
  {
    id: 3,
    name: "회원가입",
    src: "/sign-up"  
  },
  {
    id: 4,
    name: "로그인",
    src: "/login"
  }
]

const MenuList = () => {
  return (
    <ul>
      {Menus.map((menu) => {
        return(
          <li key={menu.id}>
            {menu.name}
          </li>
        );
      })}
    </ul>
  );
}

export default MenuList;