import React from "react";
import "./css/Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
        <TwitterTweetEmbed tweetId={"1412534204491960321"} />
        <TwitterShareButton
          url={
            "https://www.youtube.com/watch?v=hQXLrPlcbeo&ab_channel=Bar%C4%B1%C5%9F%C3%96zcan"
          }
          options={{ text: "Elon Musk is awesome man", via: "elonmusk" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
