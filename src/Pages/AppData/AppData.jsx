// import React, { Suspense } from 'react';
// import Home from '../Home/Home';

// const AppData = () => {
//     // const [appData, setAppData] = useState([]);
//     const appDataPromise = fetch("./AppData.jsx").then(res => res.json())
//     return (
//         <div>
//             <h1>Book data </h1>
//             <Suspense fallback={<span>Loading</span>}>
//                 <Home appDataPromise={appDataPromise}></Home>
//             </Suspense>
//         </div>
//     );
// };

// export default AppData;