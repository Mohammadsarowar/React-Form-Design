import React from "react";
import { useForm } from "react-hook-form";
import AdditionalTerms from "../../share/AdditionalTerms/AdditionalTerms";

const TransferMuqeemTab = () => {
  const { handleSubmit, register } = useForm();
  // Sample array of fields
  const fieldData = [
    // ... (other fields)

    // Employer Details
    "newEmployerID",
    "newEmployerName",
    "oldEmployerID",
    "oldEmployerName",

    // ... (other fields)
  ];
  // Sample array of fields
  const fields = [
    // Establishment Details
    "establishmentResidentName",
    "establishmentIqamaNo",
    "establishmentOccupation",
    "establishmentGender",
    "establishmentReligion",
    "establishmentNationality",

 

    // Passport Details
    "passportNo",
    "passportExpiryHijri",
    "passportExpiryGregorian",
  ];

  const displayOnlyValues = {
    // Replace with actual data
    establishmentResidentName: "Display Resident Name",
    establishmentIqamaNo: "Display Iqama No.",
    establishmentOccupation: "Display Occupation",
    establishmentGender: "Display Gender",
    establishmentReligion: "Display Religion",
    establishmentNationality: "Display Nationality",

    passportNo: "Display Passport No.",
    passportExpiryHijri: "Display Passport Expiry (Hijri)",
    passportExpiryGregorian: "Display Passport Expiry (Gregorian)",
  };

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:ml-72 bg-gray-200 lg:mr-5 rounded-lg mx-auto m-4">
       <span className="flex items-center">
            <span className="h-px flex-1 bg-teal-600"></span>
            <span className="shrink-0 px-6 font-mono font-bold text-teal-700">
             Input Forms / Display Only Data
            </span>
            <span className="h-px flex-1 bg-teal-600"></span>
          </span>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 m-5">
  <div className="lg:col-span-2">
      <div className="grid lg:grid-cols-3 gap-3">
    {fields.map((fieldName) => (
        <div key={fieldName} className="mb-">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
            type="text"
            id={fieldName}
            {...register(fieldName)} 
            className="mt-1 p-2 min-w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
      ))}
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
            className="mt-1 p-2 min-w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
      ))}
    </div>
  </div>
  <div className=" rounded-lg   mr-5">
  <AdditionalTerms/>
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

export default TransferMuqeemTab;
