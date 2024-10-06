/* eslint-disable @next/next/no-img-element */
import { Divcomponents, ImageComponents, ImageOpenComponents } from "./style";

export default function ConponentMontion() {
  return (
    <>
      <Divcomponents>
        <div className="divup">
          <div className="div1"></div>
          <div className="div2"></div>
        </div>

        <div className="divup">
          <div className="div1"></div>
          <div className="div2"></div>
        </div>

        <div className="divup">
          <div className="div1"></div>
          <div className="div2"></div>
        </div>
      </Divcomponents>

      <ImageComponents>
        <div className="imgs"></div>
      </ImageComponents>

      <ImageOpenComponents>
       <div className="div1"></div>
       <div className="div2"></div>
       <div className="div3"></div>
       <div className="div4"></div>
       <div className="div5"></div>
      </ImageOpenComponents>
    </>
  );
}
