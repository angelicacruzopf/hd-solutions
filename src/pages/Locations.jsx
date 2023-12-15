import { locationsList } from "../assets/data/dataLocations";
import { useState } from "react";
import map from "../assets/img/map.png"

function LocationCard({ state }) {
  return (
    <>
      {state.map((value) => (
        <div className="flex items-center mb-7" key={value.id}>
          <div className="bg-gray-300 w-20 h-20 rounded-lg">
            <img src={map} alt="Mapa" class="object-cover h-full w-full"/>
          </div>
          <div>
            <h4 className="font-semibold text-lg ms-4">{value.address}</h4>
            <p className="font-normal text-gray-500 ms-4">{value.phone}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default function Locations() {
  const [showDallas, setShowDallas] = useState(false);

  const dallas = locationsList.filter((value) => value.state === "Dallas");

  return (
    <section className="flex justify-center">
      <div className="flex flex-col w-3/5 justify-center">
        <h2 className="font-bold text-center mb-10 text-5xl">Nuestras sucursales</h2>
        <div className="grid mb-16 divide-y">
          <div>
            <button
              onClick={() => setShowDallas(!showDallas)}
              className={`accordion my-8 font-bold text-lg ${
                showDallas ? "active" : ""
              }`}
            >
              Puerto rico
              <span className="font-normal ms-1"> (2 ubicaciones)</span>
            </button>
            <div
              className={`panel flex justify-center gap-16 ${
                showDallas ? "" : "hidden"
              }`}
            >
              {showDallas && <LocationCard state={dallas} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
