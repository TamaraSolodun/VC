import { Content } from "antd/es/layout/layout";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { decrement, increment } from "../store/counterSlice";
import { Button } from "antd";
import VideoConference from "./JitsiTest";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "../../public/vite.svg";

export default function MainContent({colorBgContainer}: {colorBgContainer: string}) {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();


  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
      <>
      <VideoConference/>
        {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div> */}
        <h1>Vite + React</h1>
        <div className="card">
          <Button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button>
          <span>{count}</span>
          <Button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
        </div>
      </>
    </Content>
  );
}
