import { useState, useEffect} from "react";

export default function Pagination() {
  const baseUrl = `https://jsonplaceholder.typicode.com/photos`;
  const items_per_page = 10;
  const [data, setData] = useState();
  const [error, setError] = useState("error in fetching");
  let [current, setCurrent] = useState(1);
  let [originalData, setOriginalData] = useState();
  const fixed = originalData?.length;
  const target = fixed / items_per_page;
  let [mainValue,setMainValue]=useState(0);

  // console.log("mainValue",mainValue)

  const getData = async () => {
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      // console.log(actualData);
      setOriginalData(actualData);
      Fetching(actualData);
      setError();
    } catch (err) {
      setError(err.message);
      setOriginalData();
    }
  };

  let Fetching = (info) => {
    // console.log(current, mainValue, "fine");
    let storage = [];
    let required;
    
    if(mainValue===0)
      required = current * items_per_page - items_per_page
    else
      required = mainValue * items_per_page - items_per_page
    
    let finalValue = required + 10;
    for (let i = required; i < finalValue; i++) {
      storage.push(info[i]);
    }
    setData(storage);
    // console.log("Wow", storage);
  };

  function Previous() {
    let check = current;
    if (check > 1) {
      check = check - 1;
      // console.log(check);
      setCurrent(check);
      setMainValue(check)
    }
  }
  function Next() {
    let check = current+2
    // console.log("check",check )
    if (check < target) {
      check = check + 1;
      // console.log(check, "ok");
      setCurrent(current+1);
      setMainValue(check)
      // console.log("Now,mainValue is",mainValue)
    }
  }

// function Hit(e){
//   console.log(+e.target.innerText,typeof +e.target.innerText);
//   setMainValue(+e.target.innerText)
// }

  useEffect(() => {
    // console.log("useEffect");
    getData();
  }, [mainValue,current]);

  // console.log("Bye");
  // console.log("data ", data?.length);

  return (
    <>
      <table
        border="1"
        className="table bordered table-bordered table-striped table-hover text-center"
      >
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((i, j) => (
              <tr key={j}>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>
                  <img src={i.thumbnailUrl} alt="" width="25px" height="25px" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td key="1" colSpan="3">
                {error}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <button
              className="btn btn-light btn-outline-primary"
              id="pre"
              onClick={Previous}
            >
              Previous
            </button>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-light btn-outline-primary"
              id="first"
              onClick={(e)=>{setMainValue(+e?.target?.innerText)}}
            >
              {current}
            </button>
          </div>
          <div className="col-auto">
          <button
              className="btn btn-light btn-outline-primary"
              id="second"
              onClick={(e)=>{setMainValue(+e?.target?.innerText)}}
            >
              {current+1}
            </button>
            
          </div>
          <div className="col-auto">
            <button
              className="btn btn-light btn-outline-primary"
              id="third"
              onClick={(e)=>{setMainValue(+e?.target?.innerText)}}
            >
              {current+2}
            </button>
          </div>
          <div className="col-1">
            <button
              className="btn btn-light btn-outline-primary"
              id="nex"
              onClick={Next}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// <div className="offset-5 col-auto">
//             <button className="btn btn-light btn-outline-primary">Total:{target} pages</button>
// </div>
// <input className="btn btn-auto btn-light btn-outline-primary w-100 text-center" value={current} ref={mainValue} disabled/>
// <input className="btn btn-auto btn-light btn-outline-primary w-100 text-center" value={current} ref={mainValue} readonly/>