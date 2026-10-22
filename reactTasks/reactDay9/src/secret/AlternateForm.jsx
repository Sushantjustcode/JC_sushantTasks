import { useEffect, useState } from "react";
import Select from "react-select";
import Creatable from "react-select/creatable";

const AmusementParkRegistration = () => {
  const [formData, setFormData] = useState({
    attractions: [],
    ticketType: "",
    favoriteRide: null,
    extraExperiences: [],
  });

  const [errors, setErrors] = useState({});

  const attractions = [
    { id: 1, name: "Roller Coaster", category: "Thrill" },
    { id: 2, name: "Ferris Wheel", category: "Family" },
    { id: 3, name: "Water Ride", category: "Adventure" },
    { id: 4, name: "Haunted House", category: "Horror" },
    { id: 5, name: "Bumper Cars", category: "Fun" },
  ];

  const options = [
    { value: "roller-coaster", label: "Roller Coaster" },
    { value: "water-kingdom", label: "Water Kingdom" },
    { value: "ferris-wheel", label: "Ferris Wheel" },
    { value: "vr-adventure", label: "VR Adventure" },
  ];

  const ticketTypes = [
    { value: "1", label: "Day Pass" },
    { value: "2", label: "VIP Pass" },
    { value: "3", label: "Family Pass" },
  ];

  // Load existing registration data for editing

  useEffect(() => {
    const data = {
      attractions: [1],
      ticketType: "2",
      favoriteRide: "water-kingdom",
      extraExperiences: ["ferris-wheel", "vr-adventure"],
    };

    const selectedOption = options.find(
      (option) => option.value === data.favoriteRide,
    );

    const selectedMultiOptions = options.filter((option) =>
      data.extraExperiences.includes(option.value),
    );

    setFormData({
      attractions: data.attractions,
      ticketType: data.ticketType,
      favoriteRide: selectedOption || null,
      extraExperiences: selectedMultiOptions,
    });
  }, []);

  // Handle individual attraction checkboxes
  const handleAttractionChange = (attractionId, checked) => {
    setFormData((prev) => ({
      ...prev,
      attractions: checked
        ? [...prev.attractions, attractionId]
        : prev.attractions.filter((id) => id !== attractionId),
    }));

    setErrors((prev) => ({ ...prev, attractions: "" }));
  };

  // Handle Select All attractions
  const handleSelectAll = (checked) => {
    setFormData((prev) => ({
      ...prev,
      attractions: checked ? attractions.map((item) => item.id) : [],
    }));

    setErrors((prev) => ({ ...prev, attractions: "" }));
  };

  // Validate and submit the registration
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.attractions.length === 0) {
      newErrors.attractions = "Please select at least one attraction.";
    }

    if (!formData.ticketType) {
      newErrors.ticketType = "Please select a ticket type.";
    }

    if (!formData.favoriteRide) {
      newErrors.favoriteRide = "Please select your favorite ride.";
    }

    if (formData.extraExperiences.length === 0) {
      newErrors.extraExperiences =
        "Please select or create at least one experience.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Convert react-select objects into values
    const payload = {
      ...formData,
      favoriteRide: formData.favoriteRide.value,
      extraExperiences: formData.extraExperiences.map((item) => item.value),
    };

    console.log("Registration Data:", formData);
    console.log("Registration Payload:", payload);
  };

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: "46px",
      borderRadius: "10px",
      borderColor: state.isFocused ? "#7c3aed" : "#e2e8f0",
      boxShadow: state.isFocused ? "0 0 0 2px #ede9fe" : "none",
      "&:hover": {
        borderColor: "#a78bfa",
      },
    }),
    menu: (base) => ({
      ...base,
      zIndex: 20,
      borderRadius: "10px",
      overflow: "hidden",
    }),
  };

    
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/70">
        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-500 px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 right-40 h-44 w-44 rounded-full bg-white/10" />

          <div className="relative">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
              Your next adventure starts here
            </span>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Adventure Park Registration
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-purple-100 sm:text-base">
              Build your perfect park day. Choose your ticket, pick your
              favorite attractions, and create unforgettable experiences.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-lg bg-white/15 px-3 py-2">
                ✨ Exciting rides
              </span>
              <span className="rounded-lg bg-white/15 px-3 py-2">
                🎟️ Flexible passes
              </span>
              <span className="rounded-lg bg-white/15 px-3 py-2">
                🎢 All-day fun
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-8 lg:p-10">
          {/* Attractions checkbox group */}
          <section className="mb-9">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
                  Step 01
                </p>
                <h2 className="mt-1 text-xl font-bold text-slate-800">
                  Choose your attractions
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Select all the experiences you want to explore.
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700">
                {formData.attractions.length}/{attractions.length} selected
              </span>
            </div>

            <label className="mb-4 flex cursor-pointer items-center gap-3 rounded-xl border border-violet-100 bg-violet-50/70 p-4 transition hover:bg-violet-50">
              <input
                type="checkbox"
                checked={
                  attractions.length > 0 &&
                  formData.attractions.length === attractions.length
                }
                onChange={(e) => handleSelectAll(e.target.checked)}
                className="h-4 w-4 accent-violet-600"
              />
              <span className="text-sm font-semibold text-slate-700">
                Select all attractions
              </span>
            </label>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {attractions.map((attraction) => {
                const selected = formData.attractions.includes(attraction.id);

                return (
                  <label
                    key={attraction.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                      selected
                        ? "border-violet-400 bg-violet-50 ring-1 ring-violet-200"
                        : "border-slate-200 bg-white hover:border-violet-200 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={(e) =>
                        handleAttractionChange(attraction.id, e.target.checked)
                      }
                      className="h-4 w-4 shrink-0 accent-violet-600"
                    />

                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-800">
                        {attraction.name}
                      </span>
                      <span className="mt-1 block text-xs text-slate-500">
                        {attraction.category} experience
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>

            {errors.attractions && (
              <p className="mt-2 text-sm text-red-600">{errors.attractions}</p>
            )}
          </section>

          <div className="mb-9 border-t border-slate-100" />

          {/* Ticket dropdown */}
          <section className="mb-9">
            <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
              Step 02
            </p>
            <h2 className="mt-1 text-xl font-bold text-slate-800">
              Select your ticket
            </h2>
            <p className="mb-5 mt-1 text-sm text-slate-500">
              Choose the pass that suits your adventure.
            </p>

            <label
              htmlFor="ticketType"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Ticket package
            </label>

            <select
              id="ticketType"
              value={formData.ticketType}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  ticketType: e.target.value,
                }));

                setErrors((prev) => ({ ...prev, ticketType: "" }));
              }}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
            >
              <option value="">Choose your ticket package</option>
              {ticketTypes.map((ticket) => (
                <option key={ticket.value} value={ticket.value}>
                  {ticket.label}
                </option>
              ))}
            </select>

            {errors.ticketType && (
              <p className="mt-2 text-sm text-red-600">{errors.ticketType}</p>
            )}
          </section>

          <div className="mb-9 border-t border-slate-100" />

          {/* Single select */}
          <section className="mb-9">
            <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
              Step 03
            </p>
            <h2 className="mt-1 text-xl font-bold text-slate-800">
              Your favorite ride
            </h2>
            <p className="mb-5 mt-1 text-sm text-slate-500">
              Tell us which experience you are most excited about.
            </p>

            <Select
              options={options}
              value={formData.favoriteRide}
              onChange={(selected) => {
                setFormData((prev) => ({
                  ...prev,
                  favoriteRide: selected,
                }));

                setErrors((prev) => ({ ...prev, favoriteRide: "" }));
              }}
              styles={selectStyles}
              placeholder="Search for your favorite ride..."
              isClearable
            />

            {errors.favoriteRide && (
              <p className="mt-2 text-sm text-red-600">{errors.favoriteRide}</p>
            )}
          </section>

          <div className="mb-9 border-t border-slate-100" />

          {/* Creatable multi-select */}
          <section className="mb-9">
            <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
              Step 04
            </p>
            <h2 className="mt-1 text-xl font-bold text-slate-800">
              Add more experiences
            </h2>
            <p className="mb-5 mt-1 text-sm text-slate-500">
              Choose multiple experiences or type your own custom option.
            </p>

            <Creatable
              isMulti
              options={options}
              value={formData.extraExperiences}
              onChange={(selected) => {
                setFormData((prev) => ({
                  ...prev,
                  extraExperiences: selected || [],
                }));

                setErrors((prev) => ({
                  ...prev,
                  extraExperiences: "",
                }));
              }}
              styles={selectStyles}
              placeholder="Select or create an experience..."
              isClearable
              formatCreateLabel={(inputValue) =>
                `Create experience: "${inputValue}"`
              }
            />

            <p className="mt-2 text-xs text-slate-400">
              Tip: Type a new experience name and press Enter to add it.
            </p>

            {errors.extraExperiences && (
              <p className="mt-2 text-sm text-red-600">
                {errors.extraExperiences}
              </p>
            )}
          </section>

          {/* Footer */}
          <div className="rounded-2xl border border-violet-100 bg-violet-50/60 p-5 sm:p-6">
            <h3 className="font-bold text-slate-800">
              Ready for a day full of fun?
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Review your selections and submit your registration when you're
              ready.
            </p>

            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-700 to-fuchsia-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:from-violet-800 hover:to-fuchsia-700 focus:outline-none focus:ring-4 focus:ring-violet-200 active:translate-y-0"
            >
              Register for Adventure
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </div>

      <p className="mx-auto mt-5 max-w-5xl text-center text-xs text-slate-400">
        Adventure awaits. Make every moment count!
      </p>
    </div>
  );
};

export default AmusementParkRegistration;
