import type { JSX } from "react/jsx-runtime";
import { useSelector } from "react-redux";

import type { RootState } from "../../store/store";

import FrameVc from "./components/FrameVc";
import InputVc from "./components/InputVc";

// can use ZOD
// eslint react hooks
// useCallback vs useMemo
// why did you render add (memo(({prop}) => </>)

function VideoConference(): JSX.Element {
  const isOnCall = useSelector((state: RootState) => state.user.isOnCall);

  return (
    <div style={{ height: "100%" }}>{isOnCall ? <FrameVc /> : <InputVc />}</div>
  );
}
export default VideoConference;
