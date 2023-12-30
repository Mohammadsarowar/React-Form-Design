import React from "react";
import { useForm } from "react-hook-form";

const TransferNaqalkafala = () => {
  const { handleSubmit, register } = useForm();

  // Sample array of fields
  const fields = [
    // Establishment Details (First Party)
    "establishmentFacilityName",
    "establishmentFacilityNo",
    "establishmentNationalID",
    "establishmentFacilityNo",
    "establishmentResponsiblePerson",
    "establishmentFacilityAddress",
    "establishmentCapacity",
    "establishmentEmail",

    // Establishment Address (Second Party)
    "secondPartyName",
    "secondPartyNationality",
    "secondPartyDateOfBirth",
    "secondPartyIqamaNo",
    "secondPartyIqamaType",
    "secondPartyIqamaExpiryDate",
    "secondPartyReligionArabic",
    "secondPartyReligionEnglish",
    "secondPartyGender",
    "secondPartyMaritalStatus",
    "secondPartyMobile",
    "secondPartyEmail",

    // Contract Information
    "contractProfessionArabic",
    "contractProfessionEnglish",
    "contractEmployeeID",
    "contractJobTitleArabic",
    "contractDuration",
    "contractProbationPeriod",

    // Working Hours
    "workingHoursType",
    "workingWeekDay",
    "dailyWorkingHours",
    "annualLeaveDays",

    // Financial Benefits
    "financialSalary",
    "financialHouseAllowance",
    "financialFoodAllowance",
    "financialMedicalAllowance",
    "financialOvertime",
  ];

  const displayOnlyValues = {
    // Replace with actual data
    establishmentFacilityName: "Display Facility Name",
    establishmentFacilityNo: "Display Facility No.",
    establishmentNationalID: "Display National ID",
    establishmentResponsiblePerson: "Display Establishment Responsible Person",
    establishmentFacilityAddress: "Display Facility Address",
    establishmentCapacity: "Display Establishment Capacity",
    establishmentEmail: "Display Establishment Email",

    secondPartyName: "Display Name",
    secondPartyNationality: "Display Nationality",
    secondPartyDateOfBirth: "Display Date Of Birth",
    secondPartyIqamaNo: "Display Iqama No.",
    secondPartyIqamaType: "Display Iqama Type",
    secondPartyIqamaExpiryDate: "Display Iqama Expiry Date (Hijri)",
    secondPartyReligionArabic: "Display Religion Arabic",
    secondPartyReligionEnglish: "Display Religion English",
    secondPartyGender: "Display Gender",
    secondPartyMaritalStatus: "Display Marital Status",
    secondPartyMobile: "Display Mobile",
    secondPartyEmail: "Display E-mail",

    contractProfessionArabic: "Display Profession Arabic",
    contractProfessionEnglish: "Display Profession English",
    contractEmployeeID: "Display Employee ID",
    contractJobTitleArabic: "Display Job Title (Arabic)",
    contractDuration: "Display Contract Duration",
    contractProbationPeriod: "Display Probation Period",

    workingHoursType: "Display Type of Working Hours",
    workingWeekDay: "Display Week Day",
    dailyWorkingHours: "Display Daily Hours",
    annualLeaveDays: "Display Annual Leave Days",

    financialSalary: "Display Salary",
    financialHouseAllowance: "Display House Allowance",
    financialFoodAllowance: "Display Food Allowance",
    financialMedicalAllowance: "Display Medical Allowance",
    financialOvertime: "Display Overtime",
  };

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:ml-72 mx-auto lg:mr-5 bg-gray-200 rounded-md m-3">
   <span className="flex items-center">
  <span className="h-px flex-1 bg-teal-600"></span>
  <span className="shrink-0 px-6 font-mono font-bold text-teal-700">Display Only Data</span>
  <span className="h-px flex-1 bg-teal-600"></span>
</span>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-3  font-serif m-3 ">
     
        {fields.map((fieldName) => (
          <div key={fieldName} className="m-1 mt-4">
            <label
              htmlFor={fieldName}
              className="block text-sm font-medium text-gray-600"
            >
              {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()}{" "}
              {/* Convert camelCase to Title Case */}
            </label>
            <input
              type="text"
              id={fieldName}
              defaultValue={displayOnlyValues[fieldName] || ""}
              readOnly
              className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
            />
          </div>
        ))}
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

export default TransferNaqalkafala;
