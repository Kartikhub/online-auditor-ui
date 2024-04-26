import { Card } from "flowbite-react";
import moreDetailsImg from "../assets/moreDetails.png";
import moreDetailsHoverImg from "../assets/moreDetailsHover.png";

export function StandardsCard() {
  return (
    <Card className="max-w-sm ml-5 m-5 p-2 pl-4">
      <div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Six Sigma
        </h5>
        <p className="font-normal mt-1 text-gray-700 dark:text-gray-400">
          Data-driven approach to quality management, aiming to reduce defects and variations in processes and products.
        </p>
        <time className="font-normal mt-1 text-gray-700 dark:text-gray-400">
          {new Date().toLocaleDateString('en-CA', { day: '2-digit', month: 'long', year: 'numeric' })}
        </time>
        <div className="flex justify-end">
          <button className="w-24 mt-2 relative" onClick={() => console.log("button clicked")}>
            <img src={moreDetailsImg} />
            <img
              src={moreDetailsHoverImg}
              alt="Hovered and clicked image"
              className="absolute top-0 opacity-0 hover:opacity-80 active:opacity-90"
            />
          </button>
        </div>
      </div>
    </Card>
  );
}
