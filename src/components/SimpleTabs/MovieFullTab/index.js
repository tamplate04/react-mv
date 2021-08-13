import React from "react";
import VideoFull from "../../VideoFull";


export default function MovieFullTab({ videoFull }) {
  return (
    <>
      {
        // ete video chka veradardzni <></>
        videoFull.data.length !== 0
          ? (<VideoFull iframeSrc={videoFull.data[0].iframe_src} />)
          : ( <></> )
      }
    </>
  );
}