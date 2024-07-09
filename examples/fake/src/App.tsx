// import * as D from "./data";

// export default function App() {
//   return (
//     <div>
//       <p>
//         {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
//       </p>
//       <img src={D.randomAvatar()} height="50" />
//       <img src={D.randomImage()} height="300" />
//     </div>
//   );
// }

// import { Component } from "react";
// import ClassComponent from "./ClassComponent";

// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent href="http://www.google.com" text="go to google" />
//         <ClassComponent href="http://www.x.com" text="go to x(twitter)" />
//       </ul>
//     );
//   }
// }

// import { Component } from "react";
// import ClassComponent from "./ClassComponent";
// import ArrowComponent from "./ArrowComponent";
// import P from "./P";

// export default function App() {
//   return <div>Hello function-keyword component!</div>;
// }

// const App = () => {
//   return (
//     <ul>
//       <ClassComponent href="http://www.google.com" text="go to google" />
//       <ArrowComponent href="http://www.X.com" text="go to X(twitter)" />
//     </ul>
//   );
// };

// const App = () => {
//   // refactoring map 함수 사용
//   // [...].map((item, index)=> <tag>)
//   // const texts = [<p key="1">hello</p>, <p key="2">world</p>];
//   // const texts = ["hello", "world"].map((item, index) => (<p key={index} >{item}</p>));
//   // const texts = ["hello", "world"].map((item, index) => (
//   //   <p key={index} children={item} />
//   // ));
//   const texts = ["hello", "world"].map((item, index) => (
//     <P key={index} children={item} />
//   ));
//   return <div children={texts} />;
// };

// export default App;

// event 처리 부분
// import EventLisner from "./pages/EventListner";
// import OnClick from "./pages/OnClick";
// import ReactOnClick from "./pages/ReactOnClick";
// import DispatchEvent from "./pages/DispatchEvent";
// import EventBubbling from "./pages/EventBubbling";
// import StopPropagation from "./pages/StopPropagation";
// import VariousInputs from "./pages/VariousInputs";
// import OnChange from "./pages/OnChange";
// import FileInput from "./pages/FileInput";
// import DragDrop from "./pages/DragDrop";
// import FileDrop from "./pages/FileDrop";

// export default function App() {
//   return (
//     <div>
//       <FileDrop />
//       <DragDrop />
//       <FileInput />
//       <OnChange />
//       <VariousInputs />
//       <StopPropagation />
//       <EventBubbling />
//       <DispatchEvent />
//       <ReactOnClick />
//       <OnClick />
//       <EventLisner />
//     </div>
//   );
// }

// import Bootstrap from "./pages/Bootstrap";
// import Icon from "./pages/Icon";
// import Style from "./pages/Styles";

// // import UsingIcon from './pages/UsingIcon';
// // import UsingIconWithCSSClass from './pages/UsingIconWithCSSClass';

// export default function App() {
//   return (
//     <div>
//       {/* <UsingIconWithCSSClass />
//       <UsingIcon />

//        */}
//       <Style />
//       <Icon />
//       <Bootstrap />
//     </div>
//   );
// }

// import Tailwindcss from "./pages/Tailwindcss";
// import Color from "./pages/Color";
// import TextsTest from "./pages/TextsTest";

// export default function App() {
//   return (
//     <div>
//       <TextsTest />
//       <Color />
//       <Tailwindcss />
//     </div>
//   );
// }

// import DivTest from "./pages/DivTest";
// import ViewportTest from "./pages/ViewportTest";
// import HeightTest from "./pages/HeightTest";
// import PaddingTest from "./pages/PaddingTest";
// import MarginTest from "./pages/MarginTest";
// import ImageTest from "./pages/ImageTest";
// import BackgroundImageTest from "./pages/BackgroundImageTest";
// import DisplayTest from "./pages/DisplayTest";
// import DisplayNoneTest from "./pages/DisplayNoneTest";
// import AvatarTest from "./pages/AvatarTest";
// import PositionTest from "./pages/PositionTest";
// import OverlayTest from "./pages/OverlayTest";

// export default function App() {
//   return (
//     <main>
//       <OverlayTest />
//       <PositionTest />
//       <AvatarTest />
//       <DisplayNoneTest />
//       <DisplayTest />
//       <BackgroundImageTest />
//       <ImageTest />
//       <MarginTest />
//       <PaddingTest />
//       <HeightTest />
//       <ViewportTest />
//       <DivTest />
//     </main>
//   );
// }

import DirectionTest from './pages/DirectionTest'
import WrapTest from './pages/WrapTest'
import MinMaxTest from './pages/MinMaxTest'
import JustifyCenterTest from './pages/JustifyCenterTest'
import AlignTest from './pages/AlignTest'
import UserContainer from './pages/UserContainer'
import CardContainer from './pages/CardContainer'
import ButtonTest from './pages/ButtonTest'
import InputTest from './pages/InputTest'
import ModalTest from './pages/ModalTest'

export default function App() {
  return (
    <main>
      <CardContainer />
      <UserContainer />
      <AlignTest />
      <JustifyCenterTest />
      <MinMaxTest />
      <WrapTest />
      <DirectionTest />
      {/* <ButtonTest /> */}
      {/* <InputTest /> */}
      {/* <ModalTest /> */}
    </main>
  )
}
