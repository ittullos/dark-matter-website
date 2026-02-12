import React from "react";
import SingleTrack from "./SingleTrack";
import Playlist from "./Playlist";
import { MusicItem as MusicItemType } from "../data/musicData";

interface MusicItemProps {
  item: MusicItemType;
}

const MusicItem: React.FC<MusicItemProps> = ({ item }) => {
  return (
    <div id={item.id}>
      {item.type === "playlist" ? (
        <Playlist item={item} />
      ) : (
        <SingleTrack item={item} />
      )}
      {/* Spacer */}
      <div className="mt-12" style={{ height: "20px" }}></div>
    </div>
  );
};

export default MusicItem;
