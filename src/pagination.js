// import React,{ useState, useEffect} from "react";
// import axios from "axios";

// export default function Pagination() {
  
//   const baseUrl = `https://jsonplaceholder.typicode.com/photos`;
//   let [set, setSet] = useState(false);
//   let [originalData, setOriginalData] = useState();

//   const getData = async () => {
//     const response = await axios.get(baseUrl);
//     console.log(response);

//     try {
//       const response = await fetch(baseUrl);
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(
//           `This is an HTTP error: The status is ${response.status}`
//         );
//       }
//       let actualData = await response.json();
//       console.log(actualData);
//       setOriginalData(actualData);
//          } catch (err) {
//       console.log(err);
//       setOriginalData(null);
//     }
//      finally {
//       setSet(false)
//     }
//   };

//   useEffect(()=>{
//     if(set===false){
//       console.log('set false');
//       getData();
//     }
//     else{
//       console.log('set True');
//     }
//      console.log(originalData,'data')

//   },[originalData])



//   return (
//     <>
//     {originalData?.length?
//       <>{originalData?.map((data , index)=>(
//         <img key={index} src={data?.url} alt=""/>
//     ))}</>:<><h1>Dtaa not found</h1></>}
    
//     </>
//   );
// }



// <table
//         border="1"
//         className="table bordered table-bordered table-striped table-hover text-center"
//       >
//         <thead>
//           <tr>
//             <th>id</th>
//             <th>title</th>
//             <th>image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data
//             ? data.map((i, j) => (
//                 <tr>
//                   <td key={j}>{i.id}</td>
//                   <td>{i.title}</td>
//                   <td>
//                     <img
//                       src={i.thumbnailUrl}
//                       alt=""
//                       width="25px"
//                       height="25px"
//                     />
//                   </td>
//                 </tr>
//               ))
//             : error}
//         </tbody>
//       </table>
//       <div className="container">
//         <div className="row">
//           <div className="col-auto">
//             <button
//               className="btn btn-light btn-outline-primary"
//               id="pre"
//               onClick={Previous}
//             >
//               Previous
//             </button>
//           </div>
//           <div className="col-1">
//             <input
//               className="btn btn-auto btn-light btn-outline-primary w-100 text-center"
//               value={current}
//               ref={mainValue}
//               disabled
//             />
//           </div>
//           <div className="col-auto">
//             <button
//               className="btn btn-light btn-outline-primary"
//               id="nex"
//               onClick={Next}
//             >
//               Next
//             </button>
//           </div>
//           <div className="offset-5 col-auto">
//             <button className="btn btn-light btn-outline-primary">
//               Total:{target} pages
//             </button>
//           </div>
//         </div>
//       </div>