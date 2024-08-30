import React, { useState } from 'react';
import styles from './Contract.module.css';
import SignatureCanvas from 'react-signature-canvas';

const Contract = () => {
  const [state, setState] = useState({
    date: new Date(),
    noOfMonth: 0,
    sign: null,
    url: '',
    companySign: null,
    companyURL: '',
    selectedInputs: [],
    isCropsModalOpen: false,
    isLeaseModalOpen: false,
    isPreviewModalOpen: false,
    isCompanyPreviewModalOpen: false,
    // ... other state variables
  });

  const updateState = (updates) => {
    setState((prevState) => ({ ...prevState, ...updates }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateState({ [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    updateState((prevState) => ({
      selectedInputs: checked
        ? [...prevState.selectedInputs, value]
        : prevState.selectedInputs.filter((input) => input !== value),
    }));
  };

  const handleSignatureSave = (signType) => {
    const canvas = state[signType].getTrimmedCanvas().toDataURL('image/png');
    updateState({ [`${signType}URL`]: canvas });
  };

  const handleSignatureClear = (signType) => {
    state[signType].clear();
  };

  const toggleModal = (modalName) => {
    updateState({ [modalName]: !state[modalName] });
  };

  // Render functions for different sections
  const renderCompanyDetails = () => (
    <>
      <h5>Company's details</h5>
      {/* Company detail inputs */}
    </>
  );

  const renderFarmerDetails = () => (
    <>
      <h5>Farmer's details</h5>
      {/* Farmer detail inputs */}
    </>
  );

  // ... other render functions for different sections

  const renderModal = (isOpen, title, content, onClose, onSubmit) => (
    isOpen && (
      <div className="modal modal-xl show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
            </div>
            <div className="modal-body">{content}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
              {onSubmit && (
                <button type="button" className="btn btn-primary" onClick={onSubmit}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );

  return (
    <div className="container">
      <button
        className={`btn btn-primary ${styles.createButton}`}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Offcanvas */}
      <div
        className={`offcanvas offcanvas-start ${styles.contractOffcanvas}`}
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        {/* Offcanvas content */}
      </div>

      {renderModal(
        state.isCropsModalOpen,
        'Create Contract',
        // Crops modal content
        () => toggleModal('isCropsModalOpen'),
        () => toggleModal('isPreviewModalOpen')
      )}

      {renderModal(
        state.isPreviewModalOpen,
        'Contract Preview',
        // Preview modal content
        () => toggleModal('isPreviewModalOpen')
      )}

      {renderModal(
        state.isLeaseModalOpen,
        'Create Contract',
        // Lease modal content
        () => toggleModal('isLeaseModalOpen'),
        () => toggleModal('isCompanyPreviewModalOpen')
      )}

      {renderModal(
        state.isCompanyPreviewModalOpen,
        'Contract Preview',
        // Company preview modal content
        () => toggleModal('isCompanyPreviewModalOpen')
      )}
    </div>
  );
};

export default Contract;