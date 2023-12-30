import React from "react";
import { useForm } from "react-hook-form";

const Karar = () => {
  const { handleSubmit, register } = useForm();

  // Sample array of fields
  const displayOnlyFields = [
    "requestDate",
    "employeeId",
    "nationality",
    "iqamaNumber",
    "passportNumber",
    "iqamaExpiryDate",
    "passportExpiryDate",
    "jobInContract",
  ];

  const displayOnlyValues = {
    // Replace with actual data
    requestDate: "Display Request Date",
    employeeId: "Display Employee ID",
    nationality: "Display Nationality",
    iqamaNumber: "Display Iqama Number",
    passportNumber: "Display Passport Number",
    iqamaExpiryDate: "Display Iqama Expiry Date",
    passportExpiryDate: "Display Passport Expiry Date",
    jobInContract: "Display Job In Contract",
  };
 // Sample array of fields
 const displayOnlyField = [
  "sponsor",
  "linkNumber",
  "adminDecisionLinkNo",
  "preparedBy",
];

const displayOnly = {
  // Replace with actual data
  sponsor: "Display Sponsor",
  linkNumber: "Display Link Number",
  adminDecisionLinkNo: "Display Admin Decision Link No",
  preparedBy: "Display Prepared By",
};
const fields = [
  "location",
  "email",
  "positionDescription",
  "position",
  "jobNo",
  "requestPositionDetails",
  "group",
  "id",
  "emailId",
  "site",
  "jobDescription",
  "karraLinkNumber",
  "positionCurrentStatus",
  "currentPositionAssignedEmployee",
  "employeeName",
];
const hierarchyOptions = [
  // Replace with actual options for hierarchy fields
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

  const data =  [
    "group",
    "id",
    "emailId",
    "site",
    "jobDescription",
    "karraLinkNumber",
    "positionCurrentStatus",
    "currentPositionAssignedEmployee",
    "employeeName",
   
  ]


  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:ml-72 mx-auto bg-gray-200 rounded-md lg:mr-5">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 font-serif m-5">
    <div>
    <p className="text-center mx-auto items-center mt-3 font-mono text-teal-600 bg-white w-44 rounded-lg">
           Input Fields Data
          </p>
      <div className=" grid grid-cols-2 gap-2 lg:mr-5">
  {fields.map((fieldName) => (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
            type="text"
            placeholder={fieldName}
            id={fieldName}
            {...register(fieldName)}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
      ))}
      {data.map((fieldName) => (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
         
          <div className="space-y-1 text-sm ">
            
                <select
                  required
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600 rounded-md"
                  name="country"
                >
                  {hierarchyOptions.map((country) => (
                    <option value={country.label} key={country.code}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>
        </div>
      ))}
  </div>
    </div>
  
  <div>
  <p className="text-center mx-auto items-center mt-2 font-mono text-teal-600 bg-white w-44 rounded-lg">
           Display Only Data
          </p>
     <div className="grid grid-cols-2 gap-2 lg:mr-5">

    {displayOnlyFields.map((fieldName) => (
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
     
      {displayOnlyField.map((fieldName) => (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
            type="text"
            id={fieldName}
            defaultValue={displayOnly[fieldName] || ""}
            readOnly
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600 rounded-md"
          />
        </div>
      ))}
  </div>
  </div>
 
</div>
      
      {/* ... (Other fields or sections) */}

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

export default Karar;
