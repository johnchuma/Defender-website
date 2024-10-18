"use client";
import { LuPencilLine } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import { useRef, useState, useContext } from "react";
import SettingCategory from "../(components)/settingdNav";
import { UserContext } from "../(components)/useContext";
import { FaArrowLeftLong } from "react-icons/fa6";

const SettingsPage = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [promotionsNotifications, setPromotionsNotifications] = useState(false);
  const user = useContext(UserContext);
  const [activeTab, setActiveTab] = useState(0);

  const allRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);
  const notRef = useRef<HTMLDivElement>(null);

  const fullName = user?.name || "";
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ") || "-";

  const toggleSidebar = () => {
    const sidebar = document.getElementById("mobile-sidebar");
    if (sidebar) {
      sidebar.classList.toggle("hidden");
    }
  };
  return (
    <div className="space-y-5 p-5">
     <div className="block md:hidden" onClick={toggleSidebar}>
        <span className="mx-2 text-mutedText">
            <FaArrowLeftLong />
        </span>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Settings Page</h1>
        <p className="text-mutedText">Customize for a Seamless Experience</p>
      </div>

      <SettingCategory
        allRef={allRef}
        infoRef={infoRef}
        addressRef={addressRef}
        notRef={notRef}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <section ref={allRef}>
        {(activeTab === 0 || activeTab === 1) && (
          <div className="mt-5 rounded-lg bg-white p-5 shadow-md" ref={infoRef}>
            <div className="flex items-center justify-between space-x-3">
              <div className="flex w-60 items-center space-x-3">
                <FaCircleUser className="text-5xl text-mutedText" />
                <p className="text-lg font-semibold text-black">{user?.name}</p>
              </div>
              <div className="flex w-28 items-center justify-center space-x-3 rounded-lg border-2 border-mutedText p-1">
                <p className="text-mutedText">Edit</p>
                <LuPencilLine className="text-mutedText" />
              </div>
            </div>
            <p className="py-3 text-lg font-semibold text-black">
              Personal Information
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-2">
              {[
                { label: "First name", value: firstName },
                { label: "Last name", value: lastName },
                { label: "Email", value: user?.email },
                { label: "Phone", value: user?.phone },
              ].map((item, index) => (
                <div className="space-y-1" key={index}>
                  <p className="text-sm text-mutedText">{item.label}</p>
                  <h1 className="text-sm">{item.value}</h1>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === 0 || activeTab === 2) && (
          <div
            className="mt-5 rounded-lg bg-white p-5 shadow-md"
            ref={addressRef}
          >
            <div className="flex justify-between space-x-3">
              <p className="text-lg font-semibold text-black">Address</p>
              <div className="flex w-28 items-center justify-center space-x-3 rounded-lg border-2 border-mutedText p-1">
                <p className="text-mutedText">Edit</p>
                <LuPencilLine className="text-mutedText" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-2">
              {[
                { label: "Country", value: "Tanzania" },
                { label: "City", value: "Dar es Salaam" },
                { label: "District/State", value: "Ilala" },
                { label: "Street", value: "Vunjo" },
              ].map((item, index) => (
                <div className="space-y-1" key={index}>
                  <p className="text-sm text-mutedText">{item.label}</p>
                  <h1 className="text-sm">{item.value}</h1>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === 0 || activeTab === 3) && (
          <div className="mt-5 rounded-lg bg-white p-5 shadow-md space-y-3" ref={notRef}>
            <div className="flex justify-between space-x-3">
              <p className="text-lg font-semibold text-black">Notifications</p>
              <div className="flex w-28 items-center justify-center space-x-3 rounded-lg border-2 border-mutedText p-1">
                <p className="text-mutedText">Edit</p>
                <LuPencilLine className="text-mutedText" />
              </div>
            </div>
            <div className="w-1/2">
              {[
                {
                  label: "Turn on all email notifications",
                  isToggled: emailNotifications,
                  onToggle: () => setEmailNotifications(!emailNotifications),
                },
                {
                  label: "Turn on all SMS notifications",
                  isToggled: smsNotifications,
                  onToggle: () => setSmsNotifications(!smsNotifications),
                },
                {
                  label: "Turn on promotions, order updates, and news",
                  isToggled: promotionsNotifications,
                  onToggle: () =>
                    setPromotionsNotifications(!promotionsNotifications),
                },
              ].map((item, index) => (
                <div className="flex justify-between space-x-8" key={index}>
                  <p className="text-sm">{item.label}</p>
                  <div>
                    <button
                      onClick={item.onToggle}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full p-1 transition-colors ${
                        item.isToggled ? "bg-primaryColor" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          item.isToggled ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default SettingsPage;
