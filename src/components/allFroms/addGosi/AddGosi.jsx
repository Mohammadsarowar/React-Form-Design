import React from "react";
import { useForm } from "react-hook-form";
import ContractTerms from "../../share/contractTerms/ContractTerms";

const AddGosi = () => {
  const { handleSubmit, register } = useForm();

  // Sample array of fields
  const displayOnlyFields = [
    "name",
    "nationality",
    "dateOfBirth",
    "nationalIdNo",
    "status",
    "education",
    "specialization",
    "student",
    "formerPrisoner",
    "mobile",
    "telephoneNo",
    "ext",
    "email",
    "buildingNo",
    "streetName",
    "district",
    "city",
    "postalCode",
    "additionalNo",
    "unitNo",
    "country",
    "city",
    "addressDetails",
    "joiningDate",
    "companyWorkerNo",
    "stillOnJob",
    "employmentType",
    "workingOutKSA",
    "payrollStartDate",
    "occupation",
    "basic",
    "housingAllowance",
    "monthlyCommissions",
    "otherAllowances",
    "totalSalary",
    "contractType",
    "contractDuration",
    "contractStartDate",
    "probationPeriodDays",
    "daysPerWeek",
    "actualWorkingHours",
    "weeklyOffDays",
    "annualLeaveDays",
    "workLocation",
    "transportation",
    "jobTitleEnglish",
    "jobTitleArabic",
    "ibanNo",
    "representSignContractEnglish",
    "representSignContractArabic",
    "nameEnglish",
    "nameArabic",
    "contractTerms",
  ];

  const displayOnlyValues = {
    // Replace with actual data
    name: "Display Name",
    nationality: "Display Nationality",
    dateOfBirth: "Display Date of Birth",
    nationalIdNo: "Display National ID No",
    status: "Display Status",
    education: "Display Education",
    specialization: "Display Specialization",
    student: "لا",
    formerPrisoner: "لا",
    mobile: "Display Mobile",
    telephoneNo: "Display Telephone No",
    ext: "Display Ext",
    email: "Display E-mail",
    buildingNo: "Display Building No",
    streetName: "Display Street Name",
    district: "Display District",
    city: "Display City",
    postalCode: "Display Postal Code",
    additionalNo: "Display Additional No",
    unitNo: "Display Unit No",
    country: "Display Country",
    addressDetails: "Display Address Details",
    joiningDate: "Display Joining Date",
    companyWorkerNo: "Display Company Worker No",
    stillOnJob: "Display هل ما زال المشترك على رأس العمل؟",
    employmentType: "Display Employment Type",
    workingOutKSA: "Display Working Out KSA",
    payrollStartDate: "Display Payroll Start Date",
    occupation: "Display Occupation",
    basic: "Display Basic",
    housingAllowance: "Display Housing Allowance",
    monthlyCommissions: "Display Monthly Commissions",
    otherAllowances: "Display Other Allowances",
    totalSalary: "Display Total Salary",
    contractType: "Display Contract Type",
    contractDuration: "Display Contract Duration",
    contractStartDate: "Display Contract Start Date",
    probationPeriodDays: "120",
    daysPerWeek: "6",
    actualWorkingHours: "48",
    weeklyOffDays: "1",
    annualLeaveDays: "21 days",
    workLocation: "Display Work Location",
    transportation: "Display Transportation",
    jobTitleEnglish: "Display Job Title (English)",
    jobTitleArabic: "Display Job Title (Arabic)",
    ibanNo: "Display IBAN No",
    representSignContractEnglish: "Abdulrahman Alshaikh",
    representSignContractArabic: "عبدالرحمن بن الشيخ",
    nameEnglish: "HR Admin",
    nameArabic: "مسؤول الموارد البشرية",
    contractTerms: "Display Contract Terms",
  };

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:ml-72 mx-auto bg-gray-200 mr-5 p-3 rounded-lg">
       <span className="flex items-center">
  <span className="h-px flex-1 bg-teal-600"></span>
  <span className="shrink-0 px-6 font-mono font-bold text-teal-700">Display Only Data</span>
  <span className="h-px flex-1 bg-teal-600"></span>
</span>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
  <div className=" lg:col-span-2">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 font-serif">
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
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
      ))}
    </div>
  </div>
  <div className=""><ContractTerms/></div>
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

export default AddGosi;
