import ReactDOM from "react-dom";
import React, { Component } from "react";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyDaQXAjNgrNqG4DIjM5lruurT6TcFZi57s";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "Surfboards" }, videos => {
      console.log(videos)
      this.setState({videos});
      console.log(this.state.videos)
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));
