"use client"
import { LuPencilLine } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import { useRef, useState } from "react";
import SettingCategory from "../(components)/settingdNav";

const SettingsPage = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [promotionsNotifications, setPromotionsNotifications] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  const allRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);
  const notRef = useRef<HTMLDivElement>(null);

  return (
    <div className="space-y-5 p-5">
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
          <div className="bg-white p-5 mt-5 rounded-lg shadow-md" ref={infoRef}>
            <div className="flex items-center justify-between space-x-3">
              <div className="flex w-60 items-center space-x-3">
                <FaCircleUser className="text-5xl text-mutedText" />
                <p className="text-lg font-semibold text-black">Esther Howard</p>
              </div>
              <div className="flex w-28 items-center justify-center space-x-3 rounded-lg border-2 border-mutedText p-1">
                <p className="text-mutedText">Edit</p>
                <LuPencilLine className="text-mutedText" />
              </div>
            </div>
            <p className="py-3 text-lg font-semibold text-black">Personal Information</p>
            <div className="grid grid-cols-2 space-y-2">
              {[
                { label: "First name", value: "Esther" },
                { label: "Last name", value: "Howard" },
                { label: "Email", value: "esther@example.com" },
                { label: "Phone", value: "123-456-7890" },
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
          <div className="bg-white p-5 mt-5 rounded-lg shadow-md" ref={addressRef}>
            <div className="flex justify-between space-x-3">
              <p className="text-lg font-semibold text-black">Address</p>
              <div className="flex w-28 items-center justify-center space-x-3 rounded-lg border-2 border-mutedText p-1">
                <p className="text-mutedText">Edit</p>
                <LuPencilLine className="text-mutedText" />
              </div>
            </div>
            <div className="grid grid-cols-2 space-y-2">
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
          <div className="bg-white p-5 mt-5 rounded-lg shadow-md" ref={notRef}>
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
                <div className="flex justify-between" key={index}>
                  <p className="text-sm">{item.label}</p>
                  <div>
                    <button
                      onClick={item.onToggle}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full p-1 transition-colors ${
                        item.isToggled ? "bg-blue-500" : "bg-gray-300"
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

