import { useState } from 'react';
import styles from './Contract.module.css'
import SignatureCanvas from 'react-signature-canvas'
function Contract() {
    const [d] = useState(new Date());
    const [noOfMonth, setNoOfMonth] = useState(0);
    const endDate = new Date(d.getFullYear(), d.getMonth() + parseInt(noOfMonth), d.getDate());

    //crops contract
    const [sign, setSign] = useState()
    const [url, setUrl] = useState()

    const [farmerName, setFarmerName] = useState("");
    const [farmerAddress, setFarmerAddress] = useState("");
    const [farmerContactNo, setFarmerContactNo] = useState();
    const [farmerEmail, setFarmerEmail] = useState("");
    const [farmerUID, setFarmerUID] = useState();

    const [buyerName, setBuyerName] = useState("");
    const [buyerAddress, setBuyerAddress] = useState("");
    const [buyerContactNo, setBuyerContactNo] = useState();
    const [buyerEmail, setBuyerEmail] = useState("");
    const [buyerUID, setBuyerUID] = useState();

    const [cropType, setCropType] = useState();
    const [cropQuality, setCropQuality] = useState();
    const [cropQuantity, setCropQuantity] = useState();
    const [cropPrice, setCropPrice] = useState();
    const [paymentDays, setPaymentDays] = useState();
    const [paymentMode, setPaymentMode] = useState();
    const [advancePayment, setAdvancePayment] = useState();

    const [deliveryDate, setDeliveryDate] = useState();
    const [deliveryLocation, setDeliveryLocation] = useState("");
    const [responsibility, setResponsibility] = useState();

    const [acceptanceDays, setAcceptanceDays] = useState();
    const [terminationDays, setTerminationDays] = useState();

    //farmer contract
    const [companyRepresentative, setCompanyRepresentative] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyUID, setCompanyUID] = useState();
    const [registrationCountry, setRegistrationCountry] = useState();
    const [registrationState, setRegistrationState] = useState("");

    const [fName, setFName] = useState("");
    const [fAddress, setFAddress] = useState("");
    const [fContact, setFContact] = useState();
    const [fUID, setFUID] = useState();

    const [companyDescription, setCompanyDescription] = useState("");
    const [requiredCrop, setRequiredCrop] = useState("");

    const [farmSize, setFarmSize] = useState();
    const [farmLocation, setFarmLocation] = useState("");

    const [selectedInputs, setSelectedInputs] = useState([]);
    const [paymentTerm, setPaymentTerm] = useState();
    const [selectedPaymentText, setSelectedPaymentText] = useState('');

    const [unit, setUnit] = useState("");
    const [pricePerUnit, setPricePerUnit] = useState();

    const [cropsDeliveryDate, setCropsDeliveryDate] = useState();
    const [cropsDeliveryAddress, setCropsDeliveryAddress] = useState();
    const [cropPaymentDays, setCropPaymentDays] = useState();
    const [transferMode, setTransferMode] = useState();

    const [terminationDate, setTerminationDate] = useState();
    const [contractTerminationDays, setContractTerminationDays] = useState();

    const [jobTitle, setJobTitle] = useState("");

    const [companySign, setCompanySign] = useState()
    const [companyURL, setCompanyURL] = useState()

    const [isCropsModalOpen, setCropsModalOpen] = useState(false);
    const [isLeaseModalOpen, setLeaseModalOpen] = useState(false);
    const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);
    const [isCompanyPreviewModalOpen, setCompanyPreviewModalOpen] = useState(false);

    const openCropsModal = () => {
        setCropsModalOpen(true);
    };

    const closeCropsModal = () => {
        setCropsModalOpen(false);
    };

    const openLeaseModal = () => {
        setLeaseModalOpen(true);
    };

    const closeLeaseModal = () => {
        setLeaseModalOpen(false);
    };

    const openPreviewModal = () => {
        setPreviewModalOpen(true);
    };

    const closePreviewModal = () => {
        setPreviewModalOpen(false);
    };
    const openCompanyPreviewModal = () => {
        setCompanyPreviewModalOpen(true);
    };

    const closeCompanyPreviewModal = () => {
        setCompanyPreviewModalOpen(false);
    };

    const handleClear = () => {
        sign.clear()
    }
    const handleSave = () => {
        setUrl(sign.getTrimmedCanvas().toDataURL('image/png'))
    }
    const handleClear2 = () => {
        companySign.clear()
    }
    const handleSave2 = () => {
        setCompanyURL(companySign.getTrimmedCanvas().toDataURL('image/png'))
    }

    const listOfInputChange = (e) => {
        const value = e.target.value;
        setSelectedInputs(prev =>
            e.target.checked
                ? [...prev, value]
                : prev.filter(input => input !== value)
        );
    };

    const handlePaymentTermChange = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        setPaymentTerm(e.target.value);
        setSelectedPaymentText(selectedOption.text);
    };

    {/* <img src={url} alt="" /> */ }

    return (
        <>
            <div className="container">
                {/* Create button */}
                <button
                    className={`btn btn-primary ${styles.createButton}`}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                >
                    <i class="fa-solid fa-bars"></i>
                </button>


                {/* Offcanvas */}
                <div
                    className={`offcanvas offcanvas-start ${styles.contractOffcanvas}`}
                    data-bs-scroll="true"
                    tabIndex="-1"
                    id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                            Select a type of contract
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <button onClick={openCropsModal} type="button" className="btn btn-primary">
                            Contract for buying crops
                        </button>
                        <hr />
                        <button onClick={openLeaseModal} type="button" className="btn btn-primary">
                            Contract for lease farming
                        </button>
                    </div>
                </div>

                {/* Modal for crops contract */}
                {isCropsModalOpen && (
                    <div className={`modal modal-xl show d-block ${styles.cropsModal}`} tabIndex="-1" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5">Create Contract</h1>
                                    <button
                                        onClick={closeCropsModal}
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <h5>Farmer's details</h5>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={farmerName} onChange={(e) => setFarmerName(e.target.value)} type="text" className="form-control" id="farmerName" placeholder="Username" />
                                            <label htmlFor="farmerName">Full Name</label>
                                        </div>
                                    </div >
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <textarea value={farmerAddress} onChange={(e) => setFarmerAddress(e.target.value)} className="form-control" placeholder="Leave a comment here" id="farmerAddress"></textarea>
                                            <label htmlFor="farmerAddress">Address</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={farmerContactNo} onChange={(e) => setFarmerContactNo(e.target.value)} type="number" className="form-control" id="farmerContact" placeholder="Username" />
                                            <label htmlFor="farmerContact">Contact Number</label>
                                        </div>
                                    </div>
                                    <div className="form-floating mb-3">

                                        <input value={farmerEmail} onChange={(e) => setFarmerEmail(e.target.value)} type="email" className="form-control" id="farmerEmail" placeholder="name@example.com" />
                                        <label htmlFor="farmerEmail">Email address</label>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={farmerUID} onChange={(e) => setFarmerUID(e.target.value)} type="number" className="form-control" id="farmerUID" placeholder="Username" />
                                            <label htmlFor="farmerUID">Identification Number</label>
                                        </div>
                                    </div>
                                    <h5>Buyer's details</h5>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={buyerName} onChange={(e) => setBuyerName(e.target.value)} type="text" className="form-control" id="buyerName" placeholder="Username" />
                                            <label htmlFor="buyerName">Full Name</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <textarea value={buyerAddress} onChange={(e) => setBuyerAddress(e.target.value)} className="form-control" placeholder="Leave a comment here" id="buyerAddress"></textarea>
                                            <label htmlFor="buyerAddress">Address</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={buyerContactNo} onChange={(e) => setBuyerContactNo(e.target.value)} type="number" className="form-control" id="buyerContact" placeholder="Username" />
                                            <label htmlFor="buyerContact">Contact Number</label>
                                        </div>
                                    </div>
                                    <div className="form-floating mb-3">

                                        <input value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} type="email" className="form-control" id="buyerEmail" placeholder="name@example.com" />
                                        <label htmlFor="buyerEmail">Email address</label>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={buyerUID} onChange={(e) => setBuyerUID(e.target.value)} type="number" className="form-control" id="buyerUID" placeholder="Username" />
                                            <label htmlFor="buyerUID">Identification Number</label>
                                        </div>
                                    </div>

                                    <h5>Crop's details</h5>
                                    <div className="form-floating">
                                        <select value={cropType} onChange={(e) => setCropType(e.target.value)} className="form-select" id="typeOfCrop" aria-label="Floating label select example">
                                            <option value="N/A"></option>
                                            <option value="Wheat">Wheat</option>
                                            <option value="Rice">Rice</option>
                                            <option value="Maize">Maize</option>
                                        </select>
                                        <label htmlFor="typeOfCrop">Select type of crop</label>
                                    </div>
                                    <div className="input-group mb-3 my-3">
                                        <div className="form-floating">
                                            <input value={cropQuantity} onChange={(e) => setCropQuantity(e.target.value)} type="number" className="form-control" id="cropsQuantity" placeholder="Username" />
                                            <label htmlFor="cropsQuantity">Quantity (in kg)</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <textarea value={cropQuality} onChange={(e) => setCropQuality(e.target.value)} className="form-control" placeholder="Leave a comment here" id="cropsQuality"></textarea>
                                            <label htmlFor="cropsQuality">Quality specifications</label>
                                        </div>
                                    </div>

                                    <h5>Price</h5>
                                    <div className="input-group mb-3 my-3">
                                        <div className="form-floating">
                                            <input value={cropPrice} onChange={(e) => setCropPrice(e.target.value)} type="number" className="form-control" id="cropsPrice" placeholder="Username" />
                                            <label htmlFor="cropsPrice"> Price per kg (in rupees)</label>
                                        </div>
                                    </div>
                                    <h5>Payment terms</h5>
                                    <div className="input-group mb-3 my-3">
                                        <div className="form-floating">
                                            <input value={paymentDays} onChange={(e) => setPaymentDays(e.target.value)} type="number" className="form-control" id="paymentDay" placeholder="Username" />
                                            <label htmlFor="paymentDay">Payment after how many days of delivery</label>
                                        </div>
                                    </div>
                                    <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} className="form-select" aria-label="Default select example">
                                        <option>Select a payment method</option>
                                        <option value="UPI">UPI</option>
                                        <option value="Cheque">Cheque</option>
                                        <option value="Netbanking">Netbanking</option>
                                    </select>
                                    <div className="input-group mb-3 my-3">
                                        <div className="form-floating">
                                            <input value={advancePayment} onChange={(e) => setAdvancePayment(e.target.value)} type="number" className="form-control" id="advancePayment" placeholder="Username" />
                                            <label htmlFor="advancePayment">Advance payment terms (example: 20% of total cost)</label>
                                        </div>
                                    </div>
                                    <h5>Delivery terms</h5>
                                    <div className="input-group mb-3 my-3">
                                        <div className="form-floating">
                                            <input value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} type="date" className="form-control" id="deliveryDate" placeholder="Username" />
                                            <label htmlFor="deliveryDate">Date of crops delivery</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <textarea value={deliveryLocation} onChange={(e) => setDeliveryLocation(e.target.value)} className="form-control" placeholder="Leave a comment here" id="deliveryLocation"></textarea>
                                            <label htmlFor="deliveryLocation">Delivery location</label>
                                        </div>
                                    </div>
                                    <p>Transportation responsibility</p>
                                    <div className="form-check">
                                        <input value="Buyer" onChange={(e) => setResponsibility(e.target.value)} className="form-check-input" type="radio" name="flexRadioDefault" id="buyerRadio" />
                                        <label className="form-check-label" for="buyerRadio">
                                            Buyer
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input value="Farmer" onChange={(e) => setResponsibility(e.target.value)} className="form-check-input" type="radio" name="flexRadioDefault" id="farmerRadio" />
                                        <label className="form-check-label" for="farmerRadio">
                                            Farmer
                                        </label>
                                    </div>
                                    <h5 className='my-3'>Duration of the Contract (Tenure)</h5>
                                    <div className="input-group mb-3 my-3">
                                        <div className="form-floating">
                                            <input value={noOfMonth} onChange={(e) => setNoOfMonth(e.target.value)} type="number" className="form-control" id="noOfMonths" placeholder="Username" />
                                            <label htmlFor="noOfMonths"> Number of months</label>
                                        </div>
                                    </div>
                                    <h5>Inspection and Acceptance</h5>
                                    <div className="input-group mb-3 my-3">
                                        <div className="form-floating">
                                            <input value={acceptanceDays} onChange={(e) => setAcceptanceDays(e.target.value)} type="number" className="form-control" id="rejectionDays" placeholder="Username" />
                                            <label htmlFor="rejectionDays">If quality issues, buyer can negotiate/reject crops within (no. of days) </label>
                                        </div>
                                    </div>
                                    <h5>Contract termination</h5>
                                    <div className="input-group mb-3 my-3">
                                        <div className="form-floating">
                                            <input value={terminationDays} onChange={(e) => setTerminationDays(e.target.value)} type="number" className="form-control" id="terminationDays" placeholder="Username" />
                                            <label htmlFor="terminationDays">Either Party may terminate this Agreement by providing notice prior (no. of days) </label>
                                        </div>
                                    </div>
                                    <h5>Farmer's signature</h5>
                                    <div className={`${styles.signPad}`}>
                                        <SignatureCanvas
                                            canvasProps={{ width: 200, height: 100, className: 'sigCanvas' }}
                                            ref={(data) => setSign(data)}
                                        />
                                    </div>
                                    <button className="btn btn-primary m-2" onClick={handleSave}>
                                        Save
                                    </button>
                                    <button className="btn btn-primary m-2" onClick={handleClear}>
                                        Clear
                                    </button>
                                </div>

                                <div className="modal-footer">
                                    <button
                                        onClick={closeCropsModal}
                                        type="button"
                                        className="btn btn-secondary"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={openPreviewModal} // Open preview modal using state
                                    >
                                        Preview & send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal for preview and send crops contract (buyer-farmer)*/}
                {isPreviewModalOpen && (
                    <div className="modal modal-xl show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5">Contract Preview</h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={closePreviewModal}
                                        aria-label="Close"
                                    ></button>
                                </div>

                                <div className="modal-body">
                                    <p><b>This Crop Purchase Agreement ("Agreement")</b> is made and entered into on {d.toLocaleDateString()}, by and between:</p>
                                    <ol>
                                        <li>Farmer</li>
                                        <ul>
                                            <li>Name: {farmerName} </li>
                                            <li>Address: {farmerAddress}</li>
                                            <li>Contact no. : {farmerContactNo}</li>
                                            <li>Email: {farmerEmail}</li>
                                            <li>Identification no. : {farmerUID}</li>
                                        </ul>
                                        <li>Buyer</li>
                                        <ul>
                                            <li>Name: {buyerName} </li>
                                            <li>Address: {buyerAddress}</li>
                                            <li>Contact no. : {buyerContactNo}</li>
                                            <li>Email: {buyerEmail}</li>
                                            <li>Identification no. : {buyerUID}</li>
                                        </ul>
                                    </ol>
                                    <p><b>Collectively referred to as "Parties" and individually as "Party."</b></p>
                                    <ol>
                                        <b><li>Objective of the Agreement:</li></b>
                                        <ul>
                                            <li><p>The objective of this Agreement is for the Farmer to sell and the Buyer to purchase certain crops produced by the Farmer under specific terms and conditions outlined herein.</p></li>
                                        </ul>
                                        <b><li>Crop Details:</li></b>
                                        <ul>
                                            <li>Type of crop: {cropType} </li>
                                            <li>Quantity: {cropQuantity}</li>
                                            <li>Qualtity specifications: {cropQuality}</li>
                                        </ul>
                                        <b><li>Price and Payment Terms:</li></b>
                                        <ul>
                                            <li>Price: The agreed price is ₹{cropPrice} per kg for the specified crops.</li>
                                            <li>Total price: ₹{cropPrice * cropQuantity} only.</li>
                                            <li>Payment terms: Payment will be made within {paymentDays} days after delivery and inspection of the crops. Payment will be made via {paymentMode} </li>
                                            <li>Advance payment: {advancePayment}% of the total price on signing this agreement</li>
                                        </ul>
                                        <b><li>Delivery Terms:</li></b>
                                        <ul>
                                            <li>Delivery date: The delivery of crops shall occur on {deliveryDate}</li>
                                            <li>Delivery location: The crops will be delivered to {deliveryLocation}</li>
                                            <li>Transportation Responsibility: {responsibility} will be responsible for the transportation and associated costs.</li>
                                        </ul>
                                        <b><li>Duration of the Contract (Tenure):</li></b>
                                        <ul>
                                            <li>This Agreement shall be valid for a period of {noOfMonth} months starting from {d.toLocaleDateString()} to {endDate.toLocaleDateString()}. Renewal of the Agreement shall be subject to mutual agreement by both Parties.</li>
                                        </ul>
                                        <b><li>Inspection and Acceptance:</li></b>
                                        <ul>
                                            <li>The Buyer shall inspect the crops upon delivery to verify the quality and quantity as per the agreed specifications.</li>
                                            <li>If the crops do not meet the agreed quality specifications, the Buyer has the right to reject the crops or negotiate a reduced price. In such cases, the Farmer will be notified in writing within {acceptanceDays} days</li>
                                        </ul>
                                        <b><li>Force Majeure:</li></b>
                                        <ul>
                                            <li>Neither Party shall be liable for any failure or delay in performing their obligations under this Agreement if such failure or delay is due to circumstances beyond their reasonable control, including but not limited to natural disasters, war, strikes, or government regulations.</li>
                                        </ul>
                                        <b><li>Termination:</li></b>
                                        <ul>
                                            <li>Either Party may terminate this Agreement by providing {terminationDays} days written notice to the other Party under the following conditions:</li>
                                            <ul>
                                                <li>Breach of contract by either Party.</li>
                                                <li>Mutual agreement between the Parties.</li>
                                                <li>Insolvency or bankruptcy of either Party.</li>
                                            </ul>
                                        </ul>
                                        <b><li>Dispute Resolution:</li></b>
                                        <ul>
                                            <li>Any disputes arising out of or in connection with this Agreement shall be resolved through mutual negotiation. If the dispute cannot be resolved amicably, it shall be referred to arbitration under the rules of the Arbitration Body at the location of Arbitration.</li>
                                        </ul>
                                        <b><li>Governing Law:</li></b>
                                        <ul>
                                            <li>This Agreement shall be governed by and construed by the laws of Jurisdiction.</li>
                                        </ul>
                                        <b><li>Confidentiality:</li></b>
                                        <ul>
                                            <li>Both Parties agree to keep the terms of this Agreement confidential and shall not disclose them to any third party without the prior written consent of the other Party.</li>
                                        </ul>
                                        <b><li>Amendments:</li></b>
                                        <ul>
                                            <li>Any amendments or modifications to this Agreement must be made in writing and signed by both Parties.</li>
                                        </ul>
                                        <b><li>Entire Agreement:</li></b>
                                        <ul>
                                            <li>This Agreement constitutes the entire agreement between the Parties concerning the subject matter and supersedes all prior agreements, understandings, or representations.</li>
                                        </ul>
                                        <b><li>Signatures:</li></b>
                                        <ul>
                                            <li>IN WITNESS of which, the Parties have executed this Agreement on the date first above written.</li>
                                        </ul>
                                    </ol>
                                    <div className={`${styles.signature}`}>
                                        <div className={`${styles.farmer - sign}`}>
                                            <b><p>Signature:</p></b>
                                            <img src={url} alt="Farmer's signaure" />
                                            <b><p>Name: {farmerName}</p></b>
                                            <b><p>Date: {d.toLocaleDateString()}</p></b>
                                        </div>
                                        <div className={`${styles.buyer - sign}`}>
                                            <b><p>Signature:</p></b>
                                            <img src='' alt="Buyer's signaure" />
                                            <b><p>Name: {buyerName}</p></b>
                                            <b><p>Date: {d.toLocaleDateString()}</p></b>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={closePreviewModal}
                                    >
                                        Close
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal for lease contract */}
                {isLeaseModalOpen && (
                    <div className={`modal modal-xl show d-block ${styles.contractFarmerModal}`} tabIndex="-1" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5">Create Contract</h1>
                                    <button
                                        onClick={closeLeaseModal}
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <h5>Company's details</h5>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={companyRepresentative} onChange={(e) => setCompanyRepresentative(e.target.value)} type="text" className="form-control" id="companyRepresentative" placeholder="Username" />
                                            <label htmlFor="companyRepresentative">Company Representative's Full Name</label>
                                        </div>
                                    </div >
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} type="text" className="form-control" id="companyName" placeholder="Username" />
                                            <label htmlFor="companyName">Company's Full Name</label>
                                        </div>
                                    </div >
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <textarea value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} className="form-control" placeholder="Leave a comment here" id="companyAddress"></textarea>
                                            <label htmlFor="companyAddress">Company's Address</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={companyUID} onChange={(e) => setCompanyUID(e.target.value)} type="number" className="form-control" id="companyUID" placeholder="Username" />
                                            <label htmlFor="companyUID">Company's identification number</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={registrationCountry} onChange={(e) => setRegistrationCountry(e.target.value)} type="text" className="form-control" id="registrationCountry" placeholder="Username" />
                                            <label htmlFor="registrationCountry">Company's registration country</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={registrationState} onChange={(e) => setRegistrationState(e.target.value)} type="text" className="form-control" id="registrationState" placeholder="Username" />
                                            <label htmlFor="registrationState">Company's registration state</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)} type="text" className="form-control" id="companyDescription" placeholder="Username" />
                                            <label htmlFor="companyDescription">Company's description (Type of business)</label>
                                        </div>
                                    </div>
                                    <h5>Farmer's details</h5>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={fName} onChange={(e) => setFName(e.target.value)} type="text" className="form-control" id="fName" placeholder="Username" />
                                            <label htmlFor="fName">Full Name</label>
                                        </div>
                                    </div >
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <textarea value={fAddress} onChange={(e) => setFAddress(e.target.value)} className="form-control" placeholder="Leave a comment here" id="fAddress"></textarea>
                                            <label htmlFor="fAddress">Address</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={fContact} onChange={(e) => setFContact(e.target.value)} type="number" className="form-control" id="fContact" placeholder="Username" />
                                            <label htmlFor="fContact">Contact Number</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={fUID} onChange={(e) => setFUID(e.target.value)} type="number" className="form-control" id="fUID" placeholder="Username" />
                                            <label htmlFor="fUID">Identification Number</label>
                                        </div>
                                    </div>
                                    <h5>Crop's details</h5>
                                    <div className="form-floating mb-3">
                                        <select value={requiredCrop} onChange={(e) => setRequiredCrop(e.target.value)} className="form-select" id="requiredCrop" aria-label="Floating label select example">
                                            <option value="N/A"></option>
                                            <option value="Wheat">Wheat</option>
                                            <option value="Rice">Rice</option>
                                            <option value="Maize">Maize</option>
                                        </select>
                                        <label htmlFor="requiredCrop">Select type of crop</label>
                                    </div>
                                    <h5>Farm details</h5>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={farmSize} onChange={(e) => setFarmSize(e.target.value)} type="text" className="form-control" id="farmSize" placeholder="Username" />
                                            <label htmlFor="farmSize">Farm size (in acres)</label>
                                        </div>
                                    </div >
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <input value={farmLocation} onChange={(e) => setFarmLocation(e.target.value)} type="text" className="form-control" id="farmLocation" placeholder="Username" />
                                            <label htmlFor="farmLocation">Farm Location</label>
                                        </div>
                                    </div >
                                    <h5>Supply of inputs</h5>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="seedsProvide" value="Seeds" onChange={listOfInputChange} />
                                        <label className="form-check-label" htmlFor="seedsProvide">Seeds</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="fertilizersProvide" value="Fertilizers" onChange={listOfInputChange} />
                                        <label className="form-check-label" htmlFor="fertilizersProvide">Fertilizers</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="pesticidesProvide" value="Pesticides" onChange={listOfInputChange} />
                                        <label className="form-check-label" htmlFor="pesticidesProvide">Pesticides</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="techProvide" value="Technical assistance" onChange={listOfInputChange} />
                                        <label className="form-check-label" htmlFor="techProvide">Technical assistance</label>
                                    </div>
                                    <h5 className='mt-3'>Payment terms</h5>
                                    <select value={paymentTerm} onChange={handlePaymentTermChange} className="form-select" aria-label="Default select example">
                                        <option value="N/A">The cost of these inputs will be </option>
                                        <option value="BBB">borne by the Buyer</option>
                                        <option value="C2F">provided on credit to the Farmer</option>
                                        <option value="DFP">to be deducted from the final payment</option>
                                    </select>
                                    <h5 className='mt-3'>Purchasing & pricing</h5>
                                    <div className="form-floating mb-3">
                                        <input value={unit} onChange={(e) => setUnit(e.target.value)} type="text" className="form-control" id="unit" placeholder="Set unit" />
                                        <label htmlFor="unit">Set unit (example - kg)</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input value={pricePerUnit} onChange={(e) => setPricePerUnit(e.target.value)} type="number" className="form-control" id="PricePerUnit" placeholder="Set unit" />
                                        <label htmlFor="PricePerUnit">Price per unit (in rupees)</label>
                                    </div>
                                    <h5>Delivery & payment</h5>
                                    <div className="input-group mb-3 my-3">
                                        <div className="form-floating">
                                            <input value={cropsDeliveryDate} onChange={(e) => setCropsDeliveryDate(e.target.value)} type="date" className="form-control" id="cropsDeliveryDate" placeholder="Username" />
                                            <label htmlFor="cropsDeliveryDate">Date of crops delivery</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="form-floating">
                                            <textarea value={cropsDeliveryAddress} onChange={(e) => setCropsDeliveryAddress(e.target.value)} className="form-control" placeholder="Leave a comment here" id="cropsDeliveryAddress"></textarea>
                                            <label htmlFor="cropsDeliveryAddress">Delivery location</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3 my-3">
                                        <div className="form-floating">
                                            <input value={cropPaymentDays} onChange={(e) => setCropPaymentDays(e.target.value)} type='number' className="form-control" id="cropPaymentDays" placeholder="Username" />
                                            <label htmlFor="cropPaymentDays">Payment after how many days of delivery</label>
                                        </div>
                                    </div>
                                    <select value={transferMode} onChange={(e) => setTransferMode(e.target.value)} className="form-select" aria-label="Default select example">
                                        <option value="N/A">Select a payment method</option>
                                        <option value="UPI">UPI</option>
                                        <option value="Cheque">Cheque</option>
                                        <option value="Netbanking">Netbanking</option>
                                    </select>
                                    <h5 className='mt-3'>Contract duration & termination</h5>
                                    <div className="input-group mb-3 my-3">
                                        <div className="form-floating">
                                            <input value={terminationDate} onChange={(e) => setTerminationDate(e.target.value)} type="date" className="form-control" id="terminationDate" placeholder="Username" />
                                            <label htmlFor="terminationDate">The contract is valid until </label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3 my-3">
                                        <div className="form-floating">
                                            <input value={contractTerminationDays} onChange={(e) => setContractTerminationDays(e.target.value)} type="number" className="form-control" id="contractTerminationDays" placeholder="Username" />
                                            <label htmlFor="contractTerminationDays">Either Party may terminate this Agreement by providing notice prior (no. of days) </label>
                                        </div>
                                    </div>
                                    <h5>Company representative's signature</h5>
                                    <input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} type="text" className="form-control mb-3" id="jobTitle" placeholder="Job title" />
                                    <div className={`${styles.signPad}`}>
                                        <SignatureCanvas
                                            canvasProps={{ width: 200, height: 100, className: 'sigCanvas' }}
                                            ref={(data) => setCompanySign(data)}
                                        />
                                    </div>
                                    <button className="btn btn-primary m-2" onClick={handleSave2}>
                                        Save
                                    </button>
                                    <button className="btn btn-primary m-2" onClick={handleClear2}>
                                        Clear
                                    </button>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={closeLeaseModal}
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={openCompanyPreviewModal}>
                                        Preview & Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal for lease contract preview */}
                {isCompanyPreviewModalOpen && (
                    <div className="modal modal-xl show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5">Contract Preview</h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={closeCompanyPreviewModal}
                                        aria-label="Close"
                                    ></button>
                                </div>

                                <div className="modal-body">
                                    <p><b>This Crop Purchase Agreement ("Agreement")</b> is made and entered into on {d.toLocaleDateString()}, by and between:</p>
                                    <ol>
                                        <li>Company (hereinafter referred to as the "Buyer").</li>
                                        <ul>
                                            <li>Name: {companyName} </li>
                                            <li>Address: {companyAddress}</li>
                                            <li>Registration Country: {registrationCountry}</li>
                                            <li>Registration State: {registrationState}</li>
                                            <li>Identification no. : {companyUID}</li>
                                        </ul>
                                        <li>Farmer (hereinafter referred to as the "Farmer").</li>
                                        <ul>
                                            <li>Name: {fName} </li>
                                            <li>Address: {fAddress}</li>
                                            <li>Contact no. : {fContact}</li>
                                            <li>Identification no. : {fUID}</li>
                                        </ul>
                                    </ol>
                                    <p><b>RECITALS</b></p>
                                    <p>WHEREAS, the Buyer is engaged in the business of {companyDescription}, and is in need of a consistent supply of {requiredCrop} for its operations.</p>
                                    <p>WHEREAS, the Farmer is engaged in agricultural activities and has the capacity and willingness to grow {requiredCrop} as per the Buyer's specifications.</p>
                                    <p><b>NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:</b></p>
                                    <ol>
                                        <li><b>Purpose of Agreement</b></li>
                                        <p>The purpose of this Agreement is to set out the terms and conditions under which the Farmer will grow {requiredCrop} and supply it to the Buyer.</p>
                                        <li><b>Cultivation and Production</b></li>
                                        <ul>
                                            <li><b>Crop/Livestock:</b></li>
                                            <p>The Farmer agrees to cultivate/raise {requiredCrop} on {farmSize} acres land located at {farmLocation}.</p>
                                            <li><b>Cultivation Practices: </b></li>
                                            <p>The Farmer shall follow the cultivation practices and guidelines as specified by the Buyer, which include but are not limited to use of seeds, fertilizers, pesticides. The Farmer agrees to maintain the quality standards as specified by the Buyer.</p>
                                            <li><b>Inspection and Supervision: </b></li>
                                            <p>The Buyer shall have the right to inspect the crop/livestock at any time during the cultivation/production period to ensure compliance with the specified standards.</p>
                                        </ul>
                                        <li><b>Supply of Inputs</b></li>
                                        <ul>
                                            <li><p>The Buyer agrees to provide the following inputs to the Farmer:</p>
                                                <ul>
                                                    {selectedInputs.map((input, index) => (
                                                        <li key={index}>{input}</li>
                                                    ))}
                                                </ul></li>
                                            <li>The cost of these inputs will be {selectedPaymentText}.</li>
                                        </ul>
                                        <li><b>Purchase and Pricing</b></li>
                                        <ul>
                                            <li>The Buyer agrees to purchase the entire yield/output of the {requiredCrop}] produced under this Agreement, provided it meets the quality standards as set forth in this Agreement.</li>
                                            <li>The purchase price shall be ₹{pricePerUnit} per {unit}, as determined on {d.toLocaleDateString()}.</li>
                                        </ul>
                                        <li><b>Delivery and Payment</b></li>
                                        <ul>
                                            <li><b>Delivery schedule:</b></li>
                                            <p>The Farmer shall deliver the produce to the Buyer's designated location at {cropsDeliveryAddress} on or before {cropsDeliveryDate}.</p>
                                            <li><b>Payment Terms:</b></li>
                                            <p>Payment will be made to the Farmer within {cropPaymentDays} after the delivery and acceptance of the produce. Payment will be made via {transferMode}.</p>
                                        </ul>
                                        <li><b>Force Majeure</b></li>
                                        <p>Neither party shall be held liable for any failure to perform its obligations under this Agreement if such failure is caused by natural calamities, war, strike, labor disturbances, acts of God, or any other unforeseen events beyond the control of the parties.</p>
                                        <li><b>Duration and Termination</b></li>
                                        <ul>
                                            <li><b>Term:</b></li>
                                            <p>This Agreement shall commence on {d.toLocaleDateString()} and shall remain in effect until {terminationDate}.</p>
                                            <li><b>Termination:</b></li>
                                            <p>Either party may terminate this Agreement by providing {contractTerminationDays} written notice to the other party. In case of a breach of this Agreement, the non-breaching party may terminate this Agreement immediately.</p>
                                        </ul>
                                        <li><b>Dispute Resolution</b></li>
                                        <p>Any dispute arising out of or in connection with this Agreement shall be resolved through negotiation, as agreed upon by both parties. If the dispute cannot be resolved through such means, it shall be referred to the courts of jurisdiction.</p>
                                        <li><b>Governing Law</b></li>
                                        <p>This Agreement shall be governed by and construed in accordance with the laws of{registrationState}, {registrationCountry}.</p>
                                        <li><b>Miscellaneous</b></li>
                                        <ul>
                                            <li><b>Amendments:</b></li>
                                            <p>Any amendments to this Agreement must be made in writing and signed by both parties.</p>
                                            <li><b>Entire Agreement:</b></li>
                                            <p>This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements, understandings, or representations, whether written or oral.</p>
                                            <li><b>Agreement:</b></li>
                                            <p>This Agreement shall not be assigned by either party without the prior written consent of the other party.</p>
                                        </ul>
                                    </ol>
                                    <p><b>IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.</b></p>
                                    <div className={`${styles.signature}`}>
                                        <div className={`${styles.buyer - sign}`}>
                                            <b><p>Signature:</p></b>
                                            <img src={companyURL} alt="Company representative's signaure" />
                                            <b><p>Name: {companyRepresentative}</p></b>
                                            <b><p>Title: {jobTitle}</p></b>
                                            <b><p>Date: {d.toLocaleDateString()}</p></b>
                                        </div>
                                        <div className={`${styles.farmer - sign}`}>
                                            <b><p>Signature:</p></b>
                                            <img src='' alt="Farmer's signaure" />
                                            <b><p>Name: {fName}</p></b>
                                            <b><p>Date: {d.toLocaleDateString()}</p></b>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={closeCompanyPreviewModal}
                                    >
                                        Close
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Contract;