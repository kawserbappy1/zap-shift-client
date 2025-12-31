import { useForm } from "react-hook-form";
import Container from "../../component/Container";
import { CiSearch } from "react-icons/ci";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import Services from "./../Services/Services";
import { useRef } from "react";

const Coverage = () => {
  const services = useLoaderData();
  const mapRef = useRef(null);
  const position = [23.8041, 90.4152];
  const { register, handleSubmit } = useForm();
  const handleLocationSearch = (data) => {
    if (!mapRef.current) return;
    if (!data?.location) return;
    const district = services.find((c) =>
      c.district.toLowerCase().includes(data.location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 13);
    }
  };
  return (
    <div className="pt-18">
      <Container>
        <div className="bg-white py-10 px-10 my-5 rounded-lg">
          <h2 className="text-4xl font-bold text-bg1">
            We are available in 64 districts
          </h2>

          <div className="w-full max-w-2xl py-4 mt-5">
            <form onSubmit={handleSubmit(handleLocationSearch)}>
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-1 shadow-sm">
                {/* Search Icon */}
                <CiSearch className="text-gray-400 w-5 h-5 mr-3" />

                {/* Input */}
                <input
                  {...register("location")}
                  placeholder="Search here"
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />

                {/* Button */}
                <button className="ml-3 bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-2 rounded-full transition">
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* map  */}

          <div className="w-full min-h-screen mt-5 border">
            <MapContainer
              center={position}
              zoom={8}
              scrollWheelZoom={false}
              className="min-h-screen"
              ref={mapRef}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {services.map((service, index) => (
                <Marker
                  key={index}
                  position={[service.latitude, service.longitude]}
                >
                  <Popup>
                    <strong> {service.district}</strong> <br />
                    {service.covered_area.join(", ")}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Coverage;
