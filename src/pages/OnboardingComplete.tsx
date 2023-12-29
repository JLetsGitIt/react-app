import React from "react";
import "./OnboardingComplete.css";
import { useState, MouseEvent, useEffect } from "react";
import TextSection from "./components/TextSection";
import Modal from "./components/Modal";

interface GlobalState {
  viewportWidth: number;
  setViewportWidth: React.Dispatch<React.SetStateAction<number>>;
  dynamicLength: number;
  setDynamicLength: React.Dispatch<React.SetStateAction<number>>;
}

interface OnboardingProps {
  GlobalState: GlobalState;
}

function OnboardingComplete({ GlobalState }: OnboardingProps) {
  const { viewportWidth, setViewportWidth, dynamicLength, setDynamicLength } =
    GlobalState;
  // const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  // const [dynamicLength, setDynamicLength] = useState(0.37 * viewportWidth);

  useEffect(() => {
    const handleResize = () => {
      const newViewportWidth = window.innerWidth;
      setViewportWidth(newViewportWidth);
      setDynamicLength(0.37 * newViewportWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="e10_730">
      //text section with image
      <TextSection
        heading="Welcome to Compound!"
        text1="Congrats on finishing your onboarding! As a reward, you’ve earned your
          first badge: "
        pic="oc_img2"
        text2="You’ve earned it for taking the first step towards financial
          empowerment. We’re here to support you every step of the way. Start
          exploring more features to continue your financial journey!"
      />
      //button with modal dialog box
      <button className="e10_742" onClick={openModal}>
        <h3>
          <span className="ei10_742_0">Go to Dashboard</span>
        </h3>
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>All Done!</h2>
        <p>Onboarding is complete. Proceed to post login!</p>
      </Modal>
      //header
      <div className="oc_header">
        <div className="e10_731"></div>
        <hr style={{ width: `${dynamicLength}px` }} className="e10_732"></hr>
        <hr style={{ width: `${dynamicLength}px` }} className="e10_686"></hr>
        <div className="e10_767">
          <h2>
            <span className="ei10_767_0">1</span>
          </h2>
        </div>
        <h2>
          <span className="e10_689">Register</span> //768
        </h2>
        <h2>
          <span className="e10_690">Add Your Financial Info</span> //769
        </h2>
        <div className="e10_770">
          <h2>
            <span className="ei10_770_0">2</span>
          </h2>
        </div>
        <div className="oc_img1"></div>
        <h2>
          <span className="e10_771">Complete!</span>
        </h2>
      </div>
    </div>
  );
}

export default OnboardingComplete;
