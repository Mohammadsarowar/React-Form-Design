import React from "react";
import { useForm } from "react-hook-form";

const InitialContract = () => {
  const { handleSubmit, register } = useForm();
  const fields = ["payId", "batchGroup", "education", "specialization"];
  // Sample array of field names
  const addressFields = [
    "buildingNumber",
    "streetName",
    "district",
    "city",
    "unitNumber",
    "postalCode",
    "waselNumber",
    "country",
  ];
  const salaryFields = [
    "contractStartDate",
    "contractEndDate",
    "jobTitle",
    "basic",
    "housing",
    "commission",
    "overtime",
    "food",
    "transportation",
    "medical",
    "totalSalary",
    "fixedBonusMobile",
    "fixedBonusOvertime",
    "fixedBonusHousing",
    "fixedBonusFood",
    "fixedBonusTransportation",
    "fixedBonusMedical",
    "fixedBonusOthers",
    "fixedBonusTotal",
    "ithafaAutomatic",
    "ithafaManual",
  ];
  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:ml-72 bg-gray-300 p-2 rounded-md">
    
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 font-serif">
  <div class="grid grid-cols-2 gap-2 rounded-lg  lg:col-span-2 mt-5">

  {salaryFields.map((fieldName) => (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
          placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
            type={fieldName.includes("Date") ? "date" : "text"} // Set input type based on field name
            id={fieldName}
            {...register(fieldName)}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
      ))}
      <div className="mb-4">
          <label
            htmlFor="experienceCertificates"
            className="block text-sm font-medium text-gray-600"
          >
            Experience Certificates
          </label>
          <input
            type="file"
             
            id="experienceCertificates"
            {...register("experienceCertificates")}
            accept=".pdf, .doc, .docx"
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
  </div>
  <div class=" rounded-lg">
  <div>
  <p className="text-center mx-auto items-center font-mono text-teal-600 bg-white w-32 rounded-lg">
            Basic Details{" "}
          </p>
      {fields.map((fieldName) => (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
            type="text"
            placeholder={fieldName}
            id={fieldName}
            {...register(fieldName, { maxLength: fieldName === "payId" ? 10 : 256 })}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
      ))}
      </div>
     {addressFields.map((fieldName) => (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
            type="text"
            placeholder={fieldName}
            id={fieldName}
            {...register(fieldName, { maxLength: 256 })}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
      ))}
    
  </div>
</div>
      {/* ... (Other fields or sections) */}
     {/* Submit Button */}
     <div className=" text-center mb-5">
              <button type="submit" class="group  text-center relative inline-block focus:outline-none focus:ring" >
  <span
    class="absolute inset-0 translate-x-1.5 translate-y-1.5  bg-teal-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
  ></span>

  <span
    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
  >
 Submit
  </span>
</button>
      </div>
    
    </form>
  );
};

export default InitialContract;
