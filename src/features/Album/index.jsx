import React from "react";
import AlbumList from "./components/AlbumList";
import "./styles.scss";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc trẻ",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/7/9/9/1799f9b1b4f9f9b1b4f9f9b1b4f9f9b1.jpg",
    },
    {
      id: 2,
      name: "Nhạc trữ tình",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/7/9/9/1799f9b1b4f9f9b1b4f9f9b1b4f9f9b1.jpg",
    },
    {
      id: 3,
      name: "Nhạc rap",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/7/9/9/1799f9b1b4f9f9b1b4f9f9b1b4f9f9b1.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
