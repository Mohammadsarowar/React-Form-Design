import React from "react";
import { useForm } from "react-hook-form";

const TransferQiwa = () => {
  const { handleSubmit, register } = useForm();
 // Sample array of fields
 const field = [
    "name",
    "nationality",
    "identificationNo",
    "gender",
    "education",
    "education2",
    "ibanNo",
    "mobile",
    "email",
    "dateOfBirth",
    "iqamaType",
    "religionArabic",
    "iqamaExpiryDate",
    "maritalStatus",
  ];

  const displayOnlyValue = {
    name: "Display Name",
    nationality: "Display Nationality",
    identificationNo: "Display Identification No.",
    gender: "Display Gender",
    education: "Display Education",
    education2: "Display Education 2",
    ibanNo: "Display IBAN No.",
    mobile: "Display Mobile",
    email: "Display Email",
    dateOfBirth: "Display Date Of Birth",
    iqamaType: "Display Iqama Type",
    religionArabic: "Display Religion Arabic",
    iqamaExpiryDate: "Display Iqama Expiry Date",
    maritalStatus: "Display Marital Status",
  };
  // Sample array of fields
  const fields = [
    "FacilityName",
    "FacilityNo",
    "NationalID",
    "FacilityAddress",
    "EstablishmentEmail",
    "EstablishmentRep",
    "RepresentativePosition",
    "PlaceOfDuty",
  ];

  const displayOnlyValues = {
    establishmentEmail: "110@daffah.sa",
    establishmentRepresentative: "Abdulrahman Alshaikh",
    representativePosition: "مسؤول الموارد البشرية",
    placeOfDuty: "الرياض",
  };
  const dataFields = [
    "jobTitleArabic",
    "jobNumber",
    "contractDuration",
    "duration",
    "startDate",
    "noticePeriod",
    "probationPeriod",
    "workingHoursType",
    "annualLeaveDays",
    "basicWage",
    "housing",
    "transportation",
  ];

  const dataDisplayOnlyValues = {
    jobTitleArabic: "Display Job Title (Arabic)",
    jobNumber: "Employee ID,الرقم الوظيفي", // Sample value, replace with actual data
    contractDuration: "Full Time",
    duration: "Display Duration",
    startDate: "Display تاريخ المباشرة",
    noticePeriod: "60",
    probationPeriod: "90",
    workingHoursType: "Display Type of Working Hours",
    annualLeaveDays: "Display Annual Leave Days",
    basicWage: "Display Basic Wage",
    housing: "Display Housing",
    transportation: "Display Transportation",
  };

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto lg:ml-72 bg-gray-300 m-5 rounded-lg">
       <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 m-4 font-serif ">
  <div className=" rounded-lg  lg:col-span-2">
    <div>
    <p className="text-center  items-center font-mono text-teal-600 bg-white w-96   rounded-lg mx-auto mt-5">
    Establishment Details (First Party)								
          </p>
          <div className=" rounded-lg  lg:col-span-2 grid lg:grid-cols-4 grid-cols-2  gap-2">
 
     {fields.map((fieldName) => (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
            type="text"
            id={fieldName}
            defaultValue={displayOnlyValues[fieldName] || ""}
          
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
      ))}
  </div>
    </div>
  </div>
  <div className="  ">
  <p className="text-center items-center font-mono text-teal-600 bg-white  mx-auto w-96 rounded-lg">
            Basic Details{" "}
          </p>
  <div className="rounded-lg  lg:col-span-2 grid lg:grid-cols-4 grid-cols-2  gap-2 ">
     {field.map((fieldName) => (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
            type="text"
            id={fieldName}
            defaultValue={displayOnlyValue[fieldName] || ""}
            readOnly
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
      ))}
      {dataFields.map((fieldName) => (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
            type="text"
            id={fieldName}
            defaultValue={dataDisplayOnlyValues[fieldName] || ""}
            readOnly
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
      ))}
  </div>
 
  </div>

</div>
     

      {/* ... (Other fields or sections) */}

      {/* Submit Button */}
      {/* Submit Button */}
      <div className=" text-center ">
     
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

export default TransferQiwa;
