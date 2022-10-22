import React, { HTMLAttributes } from 'react';

const Menus = [
  {
    id: 1,
    name: "조인 매칭",
    src: "/join-matching",
  },
  {
    id: 2,
    name: "랜덤 매칭",
    src: "/random-matching",
  },
  {
    id: 3,
    name: "매칭 현황",
    src: "/matching-status",
  },
  {
    id: 4,
    name: "회원가입",
    src: "/sign-up"  
  },
  {
    id: 5,
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
            <h2>
              <a href={menu.src}>{menu.name}</a>
            </h2>
          </li>
        );
      })}
    </ul>
  );
}

export default MenuList;