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

import { Component } from "react";

export default class App extends Component {
  render() {
    const isLoading = true;
    if (isLoading) return <p>loading...</p>;

    return (
      <ul>
        <li>
          <a href="http://www.google.com">
            <p>go to google</p>
          </a>
        </li>
      </ul>
    );
  }
}
