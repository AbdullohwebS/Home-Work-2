const card = document.createElement("div");
card.classList.add("card");

const cardImage = document.createElement("img");
cardImage.src = "../images/blogimage.png";
cardImage.alt = "Blog Image";
cardImage.classList.add("card-image");

const cardContent = document.createElement("div");
cardContent.classList.add("card-content");

const badge = document.createElement("span");
badge.textContent = "Learning";
badge.classList.add("badge");

const date = document.createElement("h3");
date.textContent = "Published 21 Dec 2023";
date.classList.add("date");

const title = document.createElement("h1");
title.textContent = "HTML & CSS foundations";
title.classList.add("card-title");

const description = document.createElement("p");
description.textContent =
  "These languages are the backbone of every website, defining structure, content, and presentation.";
description.classList.add("card-description");

const userInfo = document.createElement("div");
userInfo.classList.add("user-info");

const userImage = document.createElement("img");
userImage.src = "../images/userpic.png";
userImage.alt = "User Image";
userImage.classList.add("user-image");

const userName = document.createElement("h6");
userName.textContent = "Greg Hooper";
userName.classList.add("user-name");

userInfo.append(userImage, userName);

cardContent.append(badge, date, title, description, userInfo);

card.append(cardImage, cardContent);

document.body.appendChild(card);

const style = document.createElement("style");
style.textContent = `
  body {
    background: #F4D04E;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  .card {
    background: white;
    border-radius: 12px;
    box-shadow: 8px 10px;
    width: 350px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
  }

   .card:active {
    box-shadow: 13px 14px;
    transition: all ease-in-out 0.4s;
  }

  .card-image {
    margin-top: 10px;
    margin-left: 10px;
    width: 330px;
  }

  .card-content {
    transition: all ease-in-out 0.4s;
    padding: 16px;
  }

  .badge {
    background: #ffd700;
    color: black;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 8px;
  }

  .date {
    font-size: 14px;
    color: #888;
    margin: 0;
  }

  .card-title {
    cursor: pointer;
    font-size: 18px;
    margin: 8px 0;
    color: black;
    transition: color 0.2s ease-in-out;
  }

  .card-title:active {
    color: #FFD700;
  }

  .card-description {
    font-size: 14px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 16px;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .user-image {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .user-name {
    font-size: 14px;
    color: black;
    margin: 0;
  }
`;
document.head.appendChild(style);
