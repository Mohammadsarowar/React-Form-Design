import React from "react";

const AdditionalTerms = () => {
  const additionalTerms = {
    section1: `
      يحق للشركة تعيين العامل أو نقله في أي موقع من مواقعها أو فرع من فروعها أو مشروع من مشاريعها في المملكة العربية السعودية وفقا لما تقتضيه حاجه العمل The company has the right to appoint the worker or transfer him to any of its sites or one of its branches or one of its projects in the Kingdom of Saudi Arabia according to the needs of the work,
    `,

    section2: `
      في حال فسخ العقد دون سبب مشروع اتفق الطرفان على إذا كان فسخ العقد من قبل الشركة فتلتزم بدفع مبلغ لا يقل عن شهرين من اجر العامل او مبلغ الفين ريال ايهما أكبر و إذا كان فسخ العقد من قبل العامل فيلتزم بأن يدفع قيمه باقي مده العقد In case the contract is terminated without a legitimate reason the two parties have agreed if the contract is terminated by the company it shall pay an amount of no less than two months of the workers wage or an amount of two thousand riyals whichever is greater and If the contract is terminated by the worker then they are obligated to pay his value for the remainder of the contract period,
    `,

    section3: `
      لا يحتسب ضمن مكافئة نهاية الخدمة أي مكافئات او عمولات او حوافز تم منحها للموظف خارج العقد End of service bounces excludes any bonuses or commissions or incentives given to the employee outside the contract.
    `,
  };

  return (
    <div className="max-w-md mx-auto p-6 ">
    {/*
  Heads up! 👋

  Custom CSS:
    - animate-background https://github.com/markmead/hyperui/blob/main/tailwind.preset.js
*/}

<article
  className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>
  <div className="rounded-[10px] bg-white sm:p-6 font-serif">
    <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

    <a href="#">
    <div className="mb-4 ">
        <h2 className="text-xl font-bold mb-2">Section 1</h2>
        <p>{additionalTerms.section1}</p>
      </div>
    </a>

    <a href="#">
    <div className="mb-4 ">
        <h2 className="text-xl font-bold mb-2">Section 2</h2>
        <p>{additionalTerms.section2}</p>
      </div>
    </a>

    <a href="#">
    <div className="mb-4 ">
        <h2 className="text-xl font-bold mb-2">Section 3</h2>
        <p>{additionalTerms.section3}</p>
      </div>
    </a>

    
  </div>
</article>
    

 
    </div>
  );
};

export default AdditionalTerms;
