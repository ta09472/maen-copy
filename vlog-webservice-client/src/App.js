import GlobalStyled from "./components/styled/commonStyled/GlobalStyled";
import GlobalWrapper from "./components/styled/commonStyled/GlobalWrapper";

import Header from "./components/common/Header";
import Main from "./components/main/Main";
import SearchResult from "./components/search/SearchResult";
import Channel from "./components/channel/Channel";
import Recent from "./components/recent/Recent";
import Upload from "./components/upload/Upload";

import VideoModal from "./components/videoModal/VideoModal";
import { Route, Routes } from "react-router-dom";
import UploadTest from "./components/UploadTest";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  return (
    <>
      <GlobalStyled />
      <div className="App">
        <Provider store={store}>
          <GlobalWrapper>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/channel" element={<Channel />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/recent" element={<Recent />} />
              <Route path="/search" element={<SearchResult />} />
              <Route path="/uploadtest" element={<UploadTest />} />
            </Routes>
          </GlobalWrapper>
        </Provider>
      </div>
    </>
  );
}

export default App;
