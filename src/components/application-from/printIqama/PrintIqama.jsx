import React from "react";
import { useForm } from "react-hook-form";

const PrintIqama = () => {
  const { handleSubmit, register } = useForm();
       // Sample array of fields
  const field = [
    "firstName",
    "lastName",
    "fatherName",
    "grandFatherName",
    "countryOfBirth",
    "passportIssuance",
  ];

  const displayOnlyValue = {
    // Replace with actual data
    firstName: " First Name",
    lastName: " Last Name",
    fatherName: " Father Name",
    grandFatherName: " G/Father Name",
    countryOfBirth: " Country Of Birth",
    passportIssuance: " Passport Issuance",
  };

  // Sample array of fields
  const fields = [
    // Basic Details
    "requestDate",
    "employeeID",
    "nationality",
    "iqamaNumber",
    "passportNumber",
    "iqamaExpiryDate",
    "passportExpiryDate",
    "jobInContract",

    // Visitor Data
    "employeeNameEN",
    "employeeNameAR",
    "iqamaNo",
    "issueDate",
    "maritalStatus",
    "duration",
    "iqamaProfessionEN",
    "iqamaExpiryDateVisitor",
    "iqamaProfessionAR",
    "placeOfIssue",
    "employerID",
    "employerName",
    "gender",

    // Residency Issuance Request
    "residencyIssuanceRequest",
  ];

  const displayOnlyValues = {
    // Replace with actual data
    requestDate: "Display Request Date",
    employeeID: "Display Employee ID",
    nationality: "Display Nationality",
    iqamaNumber: "Display Iqama Number",
    passportNumber: "Display Passport Number",
    iqamaExpiryDate: "Display Iqama Expiry Date",
    passportExpiryDate: "Display Passport Expiry Date",
    jobInContract: "Display Job In Contract",

    employeeNameEN: "Display Employee Name (EN)",
    employeeNameAR: "Display Employee Name (AR)",
    iqamaNo: "Display Iqama No",
    issueDate: "Display Issue Date",
    maritalStatus: "Display Marital Status",
    duration: "Display Duration",
    iqamaProfessionEN: "Display Iqama Profession (EN)",
    iqamaExpiryDateVisitor: "Display Iqama Expiry Date (Visitor)",
    iqamaProfessionAR: "Display Iqama Profession (AR)",
    placeOfIssue: "Display Place Of Issue",
    employerID: "Display Employer ID",
    employerName: "Display Employer Name",
    gender: "Display Gender",

    residencyIssuanceRequest: "Display Residency Issuance Request",
  };

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:ml-72 mx-auto text-sm rounded-lg  bg-gray-200">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 m-3">
  <div className="  lg:col-span-2">
  <p className="text-center mx-auto items-center mt-3 font-mono text-teal-600 bg-white w-32 rounded-lg">
           Display Only
          </p>
  <div className="grid lg:grid-cols-4 gap-2 grid-cols-2 ">
        
        {fields.map((fieldName) => (
          <div key={fieldName} className="mb-4">
            <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
              {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
            </label>
            <input
              type="text"
              id={fieldName}
              defaultValue={displayOnlyValues[fieldName] || ""}
              readOnly
              className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
            />
          </div>
        ))}
        <div className="mb-4 space-y-1 text-sm ">
                  <label className="block font-medium text-gray-600">
                  Border Number*
                  </label>
                  <input
                    type="text"
                    {...register("borderNumber", {
                      maxLength: 10,
                    })}
                    placeholder="Border Number*"
                    className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                  />
                </div>
               
      </div>
  </div>
  <div className=" lg:mr-5">
  <p className="text-center mx-auto items-center mt-3 font-mono text-teal-600 bg-white w-32 rounded-lg">
           Input fields
          </p>
  {field.map((fieldName) => (
          <div key={fieldName} className="mb-4">
            <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
              {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
            </label>
            <input
              type="text"
              id={fieldName}
              defaultValue={displayOnlyValue[fieldName] || ""}
           
              className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
            />
          </div>
        ))}
  </div>
</div>

      {/* ... (Other fields or sections) */}

      {/* Submit Button */}
      {/* Submit Button */}
    <div className="text-center ">
     
     {/* Hover */}

<button  type="submit" className="group w-96 relative inline-block focus:outline-none focus:ring">
 <span
   className="absolute mb-5 inset-0 translate-x-0 translate-y-0 bg-teal-600 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
 ></span>

 <span
   className="relative text-white  mb-5 inline-block w-96 border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
 >
submit
 </span>
</button>
   </div>
    </form>
  );
};

export default PrintIqama;
